from fastapi import APIRouter, Response, status, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from hashing import Hash
from oauth2 import get_current_user, create_access_token
from database import db
from schemas import User
from datetime import datetime


router = APIRouter()

@router.post('/register')
def create_user(request:User):
    hashed_pass = Hash.bcrypt(request.password)
    user_object = dict(request)
    find_usr = db["Users"].find_one({"username":request.username})
    if find_usr:
        return {"res":"username already exists"}   
    user_object["password"] = hashed_pass
    user_object["role"] = "user"
    user_object["verified"] = False
    user_object["email"] = request.email
    user_object["photo"] = ""
    user_object["username"] = request.username
    user_object["created_at"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    user_object["updated_at"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    try:
        db["Users"].insert_one(user_object)
        return {"res":"created"}
    except Exception as e:
        return {"res":str(e)}
    


@router.post('/login')
def login(request:OAuth2PasswordRequestForm = Depends()):
    user = db["Users"].find_one({"username":request.username})
    if not user:
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    if not Hash.verify(request.password, user["password"]):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    access_token = create_access_token(data={"sub": user["username"] })
    return {"access_token": access_token, "token_type": "bearer"}

@router.get('/logout', status_code=status.HTTP_200_OK)
def logout(response: Response, user_id: str = Depends(get_current_user)):
    

    return {'status': 'success'}
