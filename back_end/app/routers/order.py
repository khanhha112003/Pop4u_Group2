from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel
from oauth2 import get_current_active_user
from schemas import OrderForm, Cart
from db.shopping import * 

router = APIRouter()
@router.get('/cart', response_model=Cart)
def get_cart(usr = Depends(get_current_active_user)):
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
def add_to_cart(productInfo: ProductBuyInfo, usr = Depends(get_current_active_user)):
    res = update_cart_by_username(usr.username, 
                                  productInfo.product_code,
                                  productInfo.quantity)
    if res:
        return {"status":1}
    else:
        raise HTTPException(status_code=404, detail="Cart not found")
        
# @router.post('/update_cart')
# def update_cart(product_name: str, quantity: int, usr = Depends(get_current_active_user)):
#     res = update_cart_by_username(usr.username, 
#                                     product_name,
#                                     quantity)
#     if res:
#         return {"res":"updated"}
#     else:
#         raise HTTPException(status_code=404, detail="Cart not found")
    
# @router.delete('/delete_item_in_cart')
# def delete_item_in_cart(product_name: str, quantity: int, usr = Depends(get_current_active_user)):
#     res = delete_item_from_cart(usr.username, product_name, quantity)
#     if res:
#         return {"res":"deleted"}
#     else:
#         raise HTTPException(status_code=404, detail="Cart not found")

# @router.delete('/delete_all_item_in_cart')
# def delete_all_item_in_cart(usr = Depends(get_current_active_user)):
#     res = drop_user_cart(usr.username)
#     if res:
#         return {"res":"deleted"}
#     else:
#         raise HTTPException(status_code=404, detail="Cart not found")
    
# @router.post('/checkout')
# def checkout(form: OrderForm, usr = Depends(get_current_active_user)):
#     res = create_order(usr.username,
#                        form.address,
#                        form.phone,
#                        form.payment_method,
#                        form.shipping_price,) 
#     if res:
#         return {"res":"created"}
#     else:
#         raise HTTPException(status_code=404, detail="Cart not found")