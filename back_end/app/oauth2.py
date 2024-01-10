from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from schemas import TokenData
from config import settings
from database import db
from typing import Union
from serializer.user_serializer import userSerializer


def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=1000)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm= settings.ALGORITHM)
    return encoded_jwt

def verify_token(token:str,credentials_exception) -> Union[dict, HTTPException]:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            return credentials_exception
        user = db["Users"].find_one({"username":username})
        return user
    except JWTError:
        return credentials_exception


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")
def get_current_user(token: Union[str, None] = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return verify_token(token,credentials_exception)

def get_current_token(token: Union[str, None] = Depends(oauth2_scheme)):
    return token

async def get_current_active_user(current_user: Union[dict, HTTPException] = Depends(get_current_user)):
    if current_user is None:
        return HTTPException(status_code=400, detail="Invalid user")
    if type(current_user) == HTTPException:
        return current_user
    return userSerializer(current_user)

optional_oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login", auto_error=False)
async def get_user_or_none(token : Union[str, None] = Depends(optional_oauth2_scheme)):
    if token is None:
        return None
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    verify_res = verify_token(token,credentials_exception)
    if type(verify_res) == HTTPException:
        return None
    else:
        return userSerializer(verify_res)