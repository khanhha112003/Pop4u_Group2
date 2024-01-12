from typing import List
from fastapi import APIRouter, Body, Depends, HTTPException
from pydantic import BaseModel
from oauth2 import get_current_active_user, get_current_user, get_user_or_none
from schemas import OrderForm, Cart
from db.shopping import * 
from db.orderAdmin import *

router = APIRouter()
@router.get('/cart', response_model=Cart)
def get_cart(usr = Depends(get_current_active_user)):
    if usr is None or usr == HTTPException:
        raise HTTPException(status_code=401, detail="Unauthorized")
    cart = get_cart_by_username(usr.username)
    if cart:
        return cart
    else:
        res = create_cart(usr.username)
        if res:
            return cart
        raise HTTPException(status_code=404, detail="Cart not found")

class ProductBuyInfo(BaseModel):
    product_code: str
    quantity: int
    
@router.post('/add_to_cart')
def update_cart(info: ProductBuyInfo, usr = Depends(get_current_active_user)):
    res = update_cart_by_username(usr.username, info.product_code, info.quantity)
    if res:
        return {"status":1}
    else:
        raise HTTPException(status_code=404, detail="Cart not found")

@router.post('/update_cart')
def update_cart(productInfo: dict = Body(...), usr = Depends(get_current_active_user)):
    if usr is None or usr == HTTPException:
        raise HTTPException(status_code=401, detail="Unauthorized")
    temp_list = []
    for i in productInfo["list_info"]:
        temp_dict = {}
        temp_dict["product_code"] = i["product_code"]
        temp_dict["quantity"] = i["quantity"]
        temp_list.append(temp_dict)
    res = update_cart_with_multiple_product_id_and_quantity(usr.username, temp_list)
    if res:
        return {"status":1}
    else:
        raise HTTPException(status_code=404, detail="Cart not found")

@router.post('/create_order')
def make_order(form: dict = Body(...), usr = Depends(get_user_or_none)):
    order = OrderForm(  total_price=form["total_price"],
                        address=form["address"],
                        phone=form["phone_number"],
                        is_buy_now=form["is_buy_now"],
                        payment_method=form["payment_method"],
                        order_product_info=form["order_product_info"],
                        shipping_price=form["shipping_price"],
                        coupon_code=form["coupon_code"],
                        note=form["note"],)
    if usr is None or usr == HTTPException:
        res = create_order(order)
        if res:
            return {"status": 1}
        else :
            raise HTTPException(status_code=404, detail="Request not success")
    else:
        order.username = usr.username
        res = create_order(order, usr.username)
        if res:
            return {"status": 1}
        else :
            raise HTTPException(status_code=404, detail="Request not success")

        
# admin function
@router.get('/all_orders')
def get_orders(usr = Depends(get_current_user)):
    if usr is None or usr == HTTPException:
        raise HTTPException(status_code=401, detail="Unauthorized")
    if usr['role']!= "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    res = get_all_order()
    if res != None:
        return res
    else:
        raise HTTPException(status_code=404, detail="Request not success")

    
@router.get('/get_order')
def get_order_by_code(order_code: str, usr = Depends(get_current_user)):
    if usr is None or usr == HTTPException:
        raise HTTPException(status_code=401, detail="Unauthorized")
    if usr['role']!= "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    print(order_code)
    res = get_order_by_order_code(order_code)
    if res != None:
        return res
    else:
        raise HTTPException(status_code=404, detail="Request not success")
    
class OrderUpdate(BaseModel):
    order_code: str
    order_state: str

@router.post('/update_order_state')
def update_order_by_code(data: OrderUpdate, usr = Depends(get_current_user)):
    if usr is None or usr == HTTPException:
        raise HTTPException(status_code=401, detail="Unauthorized")
    if usr['role']!= "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    res = update_order_state(data.order_code, data.order_state)
    if res != None:
        return res
    else:
        raise HTTPException(status_code=404, detail="Request not success")