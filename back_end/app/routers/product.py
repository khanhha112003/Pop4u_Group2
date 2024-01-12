from fastapi import APIRouter, Depends, HTTPException, Query
from oauth2 import get_user_or_none, get_current_active_user

from schemas import Product, ProductReview
from typing import List, Optional
from serializer.product_serializer import *
from db.products import * 

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

@router.get('/search_product', response_model=List[Product])
def get_list_product_by_name(product_name):
    res = get_product_list_by_name(product_name)
    if res:
        return listProductSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Product not found")
    
@router.post('/create_product')
def create_product(product: Product, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = insert_product(product)
        if True:
            return { 'status': 1}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")
        
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
def delete_product(product_name, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = delete_product(product_name)
        if res:
            return {"res":"deleted"}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")

@router.delete('/delete_all_product')
def delete_all_product(usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = drop_product_collection()
        if res:
            return {"res":"deleted"}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")
        
# @router.post('/product_review')
# def user_review(review: ProductReview, usr = Depends(get_current_active_user)):
#     if type(usr) == HTTPException:
#         raise usr
#     else:
#         res = update_product_review(review)
#         if res:
#             return {"res":"updated"}
#         else:
#             raise HTTPException(status_code=400, detail="Invalid data")

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