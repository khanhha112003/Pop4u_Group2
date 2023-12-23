from pydantic import BaseModel
from typing import Optional, List

# User and authorization
class User(BaseModel):
    username: str
    role: str
    password: str
    email: str
    name: str
    photo: str
    verified: bool

class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None


# Product
class ProductReview(BaseModel):
    product_id: str
    username: str
    review: str
    rating: float

class Product(BaseModel):
    _id : str
    product_name: str 
    description: str 
    discount_price: Optional[str] = None 
    sell_price: str 
    stock: str 
    category: str 
    photo: List[str]
    options: Optional[str] = None 
    rating: Optional[float] = None
    num_rating: Optional[int] = None
    reviews: Optional[List[ProductReview]] = None
    