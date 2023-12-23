from fastapi import APIRouter, Depends
from bson.objectid import ObjectId
from serializer.user_serializer import userResponseEntity

from database import db
from oauth2 import get_current_active_user
from schemas import Product, Token, ProductReview
router = APIRouter()

@router.get('/me', response_model=Token)
def get_me(user_id: str = Depends(get_current_active_user)):
    user = userResponseEntity(db["Users"].find_one({'_id': ObjectId(str(user_id))}))
    return {"status": "success", "user": user}

