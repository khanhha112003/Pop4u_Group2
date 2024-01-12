from fastapi import APIRouter, status, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from hashing import Hash
from oauth2 import *
from database import db
from schemas import User, PersonalInfo
from db.user import *
from serializer.user_serializer import *

router = APIRouter()


@router.post('/register')
def create_user(request:User):
    res = insert_user(request)
    if res:
        return {"status": 1}
    return {"status": 0, "message": "Lỗi tạo tài khoản"}

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

@router.get('/user_profile', response_model=PersonalInfo)
def get_me(usr: str = Depends(get_current_active_user)):
    if type(usr) == HTTPException:
        raise usr
    else:
        usr = usr.__dict__
        response = PersonalInfo(**usr)
        return response

@router.post('/update_profile')
def modify_profile(request: PersonalInfo, usr: str = Depends(get_current_active_user)):
    if type(usr) == HTTPException:
        raise usr
    else:
        usr = usr.__dict__
        usr["fullname"] = request.fullname
        usr["birthdate"] = request.birthdate
        usr["phone_number"] = request.phone_number
        usr["email"] = request.email
        res = update_user_by_id(User(**usr))
        if res:
            return {"status": 1}
        return {"status": 0, "message": "Lỗi cập nhật thông tin"}
    
@router.get('/admin_validate')
def validate_admin(usr = Depends(get_current_user)):
    if type(usr) == HTTPException:
        raise usr
    elif usr.role != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    else:
        return {"status": 1}
    
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
    

