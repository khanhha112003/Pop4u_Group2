from typing import List
from fastapi import APIRouter, Body, Depends, HTTPException, Query
from pydantic import BaseModel
from oauth2 import get_current_active_user, get_current_user
from schemas import OrderForm, Cart
from db.shopping import * 

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
    print(usr)
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
def create_order(form: OrderForm, usr = Depends(get_current_active_user)):
    if usr is None or usr == HTTPException:
        res = create_order(form)
        if res:
            return {"status": 1}
        else :
            raise HTTPException(status_code=404, detail="Request not success")
    else:
        res = create_order(form, usr)
        if res:
            list_product = form.products
            list_convert = []
            for i in list_product:
                product_buy_info = ProductBuyInfo(**i)
                product_buy_info.quantity = 0
                list_convert.append(product_buy_info.__dict__)
            res = update_cart_with_multiple_product_id_and_quantity(usr.username, list_convert)
            if res:
                return {"status": 1}
        else :
            raise HTTPException(status_code=404, detail="Request not success")

        
# admin function
@router.get('/orders')
def get_orders(usr = Depends(get_current_user)):
    return {"status": 1}
    # res = get_all_order()
    # if res:
    #     return res
    # else:
    #     raise HTTPException(status_code=404, detail="Request not success")
    

    
    