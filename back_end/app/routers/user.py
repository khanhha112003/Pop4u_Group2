from fastapi import APIRouter, Depends, HTTPException
from oauth2 import get_current_active_user
from schemas import User

router = APIRouter()
@router.get('/me', response_model=User)
def get_me(usr = Depends(get_current_active_user)):
    if type(usr) == HTTPException:
        raise usr
    else:
        return usr

