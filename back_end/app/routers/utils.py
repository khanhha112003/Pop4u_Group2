from fastapi import APIRouter, Depends, HTTPException, Query
from oauth2 import get_user_or_none

from schemas import User
from typing import List, Optional
from serializer.user_serializer import *
from db.user import * 

router = APIRouter()
@router.get('/all_users')
def get_all_customer(usr = Depends(get_user_or_none)):
    if usr is None or usr == HTTPException:
        raise HTTPException(status_code=404, detail="Forbidden")
    if usr.role != "admin":
        raise HTTPException(status_code=401, detail="Forbidden")
    list_customer = get_user(type_user="all")
    if list_customer:
        return listUserSerializer(list_customer)
    else:
        return []