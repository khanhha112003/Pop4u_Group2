from fastapi import APIRouter, Depends, HTTPException
from oauth2 import get_user_or_none

from schemas import Product
from typing import List
from serializer.product_serializer import listProductSerializer

router = APIRouter()
@router.get('/list_product', response_model=List[Product])
def get_list_product(usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        return  []
    elif usr == None:
        return [Product()]
    else:
        return  []
