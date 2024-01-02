from typing import Optional
from database import db
from schemas import Cart, Order, Product, CartItem
from db.products import get_product_detail_by_code
from serializer.product_serializer import productSerializer

def update_cart_by_username(username:str, 
                   product_code:str, 
                   quantity:int):
    collection = db['Carts']
    product = productSerializer(get_product_detail_by_code(product_code))
    item = CartItem(product_code=product_code,
                    quantity=quantity,
                    discount_price=product.discount_price,
                    sell_price=product.sell_price)
    existing_user_cart = collection.find_one({"username": username})
    if existing_user_cart:
        if len(existing_user_cart['products']) == 0:
            existing_user_cart['products'].append(item.__dict__)
        else:
            for i in range(len(existing_user_cart['products'])):
                if existing_user_cart['products'][i]['product_code'] == product_code:
                    existing_user_cart['products'][i]['quantity'] += quantity
                    break
        existing_user_cart = calculate_total_price(existing_user_cart)
        result = collection.update_one({"username": username}, {"$set": existing_user_cart})
    else:
        cart = Cart(username=username,
                    date="",
                    total_price=0,
                    products=[item.__dict__])
        cart_dict = calculate_total_price(cart.__dict__)
        result = collection.insert_one(cart_dict)
    return result

def get_cart_by_username(username: str):
    collection = db['Carts']
    cart = collection.find_one({"username": username})
    return cart

def delete_item_from_cart(username: str, product_code: str, quantity: int):
    collection = db['Carts']
    cart = collection.find_one({"username": username})
    if not cart:
        return
    for i in range(len(cart['products'])):
        if cart['products'][i]['product_code'] == product_code:
            cart['products'][i]['quantity'] -= quantity
            if cart['products'][i]['quantity'] <= 0:
                cart['products'].pop(i)
                break
    cart = calculate_total_price(cart)
    result = collection.update_one({"username": username}, {"$set": cart})
    if result:
        return cart
    return None

def drop_user_cart(username: str):
    collection = db['Carts']
    result = collection.delete_one({"username": username})  
    if result:
        return True
    return False

def calculate_total_price(cart: dict):
    total_price = 0
    for item in cart['products']:
        if item['discount_price']:
            total_price += item['quantity'] * item['discount_price']
        else:
            total_price += item['quantity'] * item['sell_price']
    cart['total_price'] = total_price
    return cart

def create_order(username: str, 
                address: str,
                payment_method: str,
                shipping_price: float,
                phone: Optional[str] = None):
    collection = db['Orders']
    cart = get_cart_by_username(username)
    if not cart:
        return None
    list_product = [productSerializer(get_product_detail_by_code(item['product_code'])).__dict__ for item in cart['products']]

    order = Order(username=username,
                  order_date="",
                  total_price=cart['total_price'],
                  products=cart['products'],
                  list_product=list_product,
                  status="pending",
                  address=address,
                  payment_method=payment_method,
                  phone=phone,
                  shipping_price=shipping_price)
    result = collection.insert_one(order.__dict__)
    if result:
        drop_user_cart(username)
        return result
    return None

