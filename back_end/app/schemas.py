from pydantic import BaseModel
from typing import Optional, List
from typing_extensions import Annotated
from pydantic.functional_validators import AfterValidator
from bson import ObjectId as _ObjectId


def check_object_id(value: str) -> str:
    if not _ObjectId.is_valid(value):
        raise ValueError('Invalid ObjectId')
    return value
ObjectId = Annotated[str, AfterValidator(check_object_id)]


# User and authorization
class User(BaseModel):
    username: str
    role: Optional[str] = None
    password: str
    email: Optional[str] = None
    fullname: str
    birthdate: str
    phone_number: str
    verified: bool = False
    
class PersonalInfo(BaseModel):
    username: str
    password: str
    email: Optional[str] = None
    fullname: str
    birthdate: str
    phone_number: str

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
    product_code: str
    username: Optional[str] = None
    create_date: Optional[str] = None
    review: Optional[str] = None
    rating: Optional[float] = None

class Product(BaseModel):
    _id: int
    category: Optional[str] = None  
    artist_code: str
    artist: str
    product_name: str 
    product_code: str 
    is_hot: bool
    is_new: bool
    is_sale: bool
    is_freeship: bool
    discount_price: Optional[float] = None 
    sell_price: float 
    product_stock: int = 0
    description: str 
    list_product_image: List[str] 
    rating: Optional[float] = None
    rating_detail: str
    num_of_rating: Optional[int] = None
    reviews: Optional[List[ProductReview]] = None

# Artist
class Artist(BaseModel):
    artist_code: str
    artist_name: str
    artist_description: Optional[str] = None
    is_hot: bool
    artist_logo: str
    artist_avatar: str

# Cart
class CartItem(BaseModel):
    quantity: int
    image: str
    product_code: str
    product_name: str
    discount_price: float
    sell_price: float

class Cart(BaseModel):
    username: str
    total_price: float
    products: List[CartItem]

# Order
class Order(BaseModel):
    username: Optional[str] = None
    order_date: str
    total_price: float
    status: str
    address: str
    phone: str
    is_paid: bool = False
    is_buy_now: bool
    payment_method: str
    order_product_info: List[dict] = []
    shipping_price: float
    coupoun_price: Optional[float] = None

class OrderForm(BaseModel):
    username: Optional[str] = None
    address: str
    order_product_info: List[dict]= []
    phone: str 
    payment_method: str
    shipping_price: float
    total_price: float
    email: Optional[str] = None
    status: str = "Pending"
    is_paid: bool = False
    is_buy_now: bool = False
    coupoun_price: Optional[float] = None

# Shipping
class PaymentMethod(BaseModel):
    method: str
    fee: float