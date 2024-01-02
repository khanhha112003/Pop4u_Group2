from fastapi import APIRouter, Depends, HTTPException
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
                     type_filter: str = "normal",
                     order: str = "asc",
                     limit: int = 10, 
                     p_start: Optional[float] = None,
                     p_end: Optional[float] = None,
                     rating: Optional[float] = None,
                     category: Optional[str] = None, 
                     artist_code: Optional[str] = None, 
                     usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user") 
    if page < 1:
        page = 1
    else:
        pass
        # tracking_user(usr.username, 
        #               "get_list_product", 
        #               { "page":page, 
        #                 "limit":limit, 
        #                 "category":category,
        #                 "p_start":p_start,
        #                 "p_end":p_end,
        #                 "rating":rating,
        #                 "artist_code":artist_code
        #               })
    if type_filter == "normal":
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
        list_product = {}
        if type_filter == "related" and artist_code != None:
            list_product = get_list_product_with_special_filter(type_filter, artist_code, limit)
        else:
            list_product = get_list_product_with_special_filter(type_filter, "", limit)
        return listProductSerializer(list_product)

@router.get('/product_detail', response_model=Product)
def get_product_detail(product_code: str, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user") 
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
        if res:
            return {"res":"created"}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")
        
@router.put('/update_product')
def update_product(product: Product, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = update_product_by_id(product)
        if res:
            return {"res":"updated"}
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
        
@router.put('/update_product_rating')
def user_review(review: ProductReview, usr = Depends(get_current_active_user)):
    if type(usr) == HTTPException:
        raise usr
    else:
        res = update_product_review(review)
        if res:
            return {"res":"updated"}
        else:
            raise HTTPException(status_code=400, detail="Invalid data")