from fastapi import APIRouter, Depends, HTTPException, Query
from oauth2 import get_user_or_none

from schemas import Product, ProductReview, Voucher
from typing import List, Optional
from serializer.product_serializer import *
from db.products import * 
from db.voucher import *

def tracking_user(username, action, data):
    pass
    
router = APIRouter()
@router.get('/product_list')
def get_list_product(page: int = 1, 
                     type_filter: str = "all",
                     order: str = "asc",
                     limit: int = 10, 
                     p_start: Optional[float] = None,
                     p_end: Optional[float] = None,
                     rating: Optional[float] = None,
                     category: Optional[str] = None, 
                     artist_code: Optional[str] = None, 
                     usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user -- product_list") 
    if page < 1:
        page = 1
    else:
        pass
    if type_filter == "all":
        total = get_total_product(category, artist_code, p_start, p_end, rating)
        list_product = get_product_list(page, 
                                        limit,
                                        order, 
                                        artist_code, 
                                        category, 
                                        p_start, 
                                        p_end, 
                                        rating)
        if total == 0:
            return {"total": 0, "list_product": []}
        return {"total":total, "list_product": listProductSerializer(list_product)}
    else:
        list_product = []
        if type_filter == "related" and artist_code != None:
            list_product = get_list_product_with_special_filter(type_filter, artist_code, 12)
        else:
            list_product = get_list_product_with_special_filter(type_filter, "", limit)
        if list_product:
            return listProductSerializer(list_product)
        else:
            return []

@router.get('/product_detail', response_model=Product)
def get_product_detail(product_code: str, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user -- product_detail") 
    res = get_product_detail_by_code(product_code)
    if res:
        return productSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Product not found")



@router.get('/product_review', response_model=ProductReview)
def get_user_review(product_code: str, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user -- product_review")
        return ProductReview(product_code=product_code).__dict__
    res = get_product_review(usr.username, product_code)
    if res:
        return productReviewSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Product not found")
    
@router.get('/get_list_product_by_list_code', response_model=List[Product])
def list_code_to_list_product(list_code: List[str] = Query(None), usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user -- product_review")
    print(list_code)
    res = get_list_product_by_list_code(list_code)
    if res:
        return listProductSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Product not found")


'''
========================= Admin feature ======================================
'''    

@router.post('/create_product')
def create_product(product: Product, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = insert_product(product)
        if res:
            return { 'status': 1}
        raise HTTPException(status_code=403, detail="Update to db fail")
        
@router.post('/update_product')
def update_product(data: dict, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        updated_product = Product(**data['product_info'])
        res = update_product_by_code(data["product_code"], updated_product)
        if res:
            return { 'status': 1}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")
        
@router.delete('/delete_product')
def delete_product(product_code, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = delete_product_by_product_code(product_code)
        if res:
            return {"res":"deleted"}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")

'''
Voucheer feature
'''
# admin get all
@router.get('/get_all_voucher')
def all_voucher(usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    else:
        res = get_all_voucher()
        if res != None:
            return res
        else:
            raise HTTPException(status_code=404, detail="Invalid request")

# admin create voucher
@router.post('/create_voucher')
def create_voucher(voucher: Voucher, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    else:
        res = insert_voucher(voucher)
        if res:
            return { 'status': 1}
        raise HTTPException(status_code=403, detail="Update to db fail")

# admin update voucher
@router.post('/update_voucher')
def update_voucher(data: dict, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    else:
        updated_voucher = Voucher(**data['voucher_info'])
        res = update_voucher_by_code(data["voucher_code"], updated_voucher)
        if res:
            return { 'status': 1}
        else:
            raise HTTPException(status_code=404, detail="Invalid request")
        
# admin delete voucher
@router.delete('/delete_voucher')
def delete_voucher(voucher_code, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Unauthorized")
    else:
        res = delete_voucher_by_code(voucher_code)
        if res:
            return {"res":"deleted"}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")

# user validate voucher
@router.get('/validate_voucher')
def validate_voucher(voucher_code, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None:
        raise HTTPException(status_code=401, detail="Unauthorized")
    else:
        res, amount = validate_voucher(voucher_code)
        if res == 1:
            return { 'status': 1 , "discount_amount": amount} 
        elif res == -1:
            return { 'status': 0, "message": "Voucher không tồn tại"}
        elif res == 0:
            return { 'status': 0, "message": "Voucher hết hạn sử dụng"}
        else:
            raise HTTPException(status_code=400, detail="Invalid request")
        
