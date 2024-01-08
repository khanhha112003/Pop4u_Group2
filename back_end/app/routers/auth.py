from fastapi import APIRouter, Response, status, Depends, HTTPException, Request
from fastapi.security import OAuth2PasswordRequestForm
from hashing import Hash
from oauth2 import get_current_user, create_access_token, get_current_token
from database import db
from schemas import User, PersonalInfo
from datetime import datetime
from db.user import *


router = APIRouter()

@router.post('/register')
def create_user(request:User):
    hashed_pass = Hash.bcrypt(request.password)
    user_object = dict(request)
    find_usr = db["Users"].find_one({"username":request.username})
    if find_usr:
        return {"status": 0, "message": "Tài khoản đã tồn tại"}
    find_usr = db["Users"].find_one({"phone_number":request.phone_number})
    if find_usr:
        return {"status": 0, "message": "Số điện thoại đã được sử dụng"}
    user_object["password"] = hashed_pass
    user_object["role"] = "user"
    user_object["verified"] = False
    user_object["email"] = request.email
    user_object["fullname"] = request.fullname
    user_object["phone_number"] = request.phone_number
    user_object["username"] = request.username
    user_object["birthdate"] = request.birthdate
    user_object["created_at"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    user_object["updated_at"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    try:
        db["Users"].insert_one(user_object)
        return {"status": 1}
    except Exception as e:
        return {"res":str(e)}

@router.post('/login')
def login(request:OAuth2PasswordRequestForm = Depends()):
    user = db["Users"].find_one({"username":request.username})
    if not user:
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    if not Hash.verify(request.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    try:
        # find token with username
        db['Tokens'].delete_many({"username": request.username})
        access_token = create_access_token(data={"sub": user["username"] })
        res = db['Tokens'].insert_one({"access_token": access_token, "username":user["username"]})
        if res:
            return {"status": 1, "access_token": access_token, "role": user["role"]}
        else:
            return {"status": 0, "message": "Lỗi tạo token"}
    except Exception as e:
        return {'status': 0, 'message': str(e)}

@router.post('/logout', status_code=status.HTTP_200_OK)
def logout(token: str = Depends(get_current_token), usr: str = Depends(get_current_user)):
    # delete token with username
    tokendata = db['Tokens'].find_one({"access_token": token, "username": usr['username']})
    if tokendata:
        res = db['Tokens'].delete_one({"access_token": token, "username": usr['username']})
        if res:
            return {'status': 1}
    return {'status': 0}

@router.post('/check_token', status_code=status.HTTP_200_OK)
def check_token(token: str = Depends(get_current_token), usr: str = Depends(get_current_user)):
    tokendata = db['Tokens'].find_one({"access_token": token, "username": usr['username']})
    if tokendata:
        return {'status': 1}
    return {'status': 0}


@router.get('/user_profile', response_model=PersonalInfo)
def get_me(usr: str = Depends(get_current_user)):
    if type(usr) == HTTPException:
        raise usr
    else:
        response = PersonalInfo(**usr)
        return response
    

