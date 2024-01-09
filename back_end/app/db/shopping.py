from typing import Optional
from database import db
from schemas import Cart, Order, Product, CartItem
from db.products import get_product_detail_by_code
from serializer.product_serializer import productSerializer, cartItemSerializer


def create_cart(username: str):
    collection = db['Carts']
    cart = Cart(username=username,
                total_price=0,
                products=[])
    result = collection.insert_one(cart.__dict__)
    if result:
        return cart
    return None

def update_cart_by_username(username:str, 
                   product_code:str, 
                   quantity:int):
    collection = db['Carts']
    product = productSerializer(get_product_detail_by_code(product_code))
    item = CartItem(quantity=quantity,
                    image=product.list_product_image[0],
                    product_code=product.product_code,
                    product_name=product.product_name,
                    discount_price=product.discount_price,
                    sell_price=product.sell_price)
    existing_user_cart = collection.find_one({"username": username})
    if existing_user_cart:
        if len(existing_user_cart['products']) != 0:
            list_product = []
            for i in existing_user_cart['products']:
                list_product.append(cartItemSerializer(i))
            if item.product_code not in [i.product_code for i in list_product]:
                existing_user_cart['products'].append(item.__dict__)
            else:
                for i in range(len(existing_user_cart['products'])):
                    if existing_user_cart['products'][i]['product_code'] == product_code:
                        existing_user_cart['products'][i]['quantity'] += quantity
                        break
            new_cart = calculate_total_price(existing_user_cart)
            result = collection.update_one({"username": username}, {"$set": new_cart})
            return result
        else:
            existing_user_cart["products"] = [item.__dict__]
            existing_user_cart = calculate_total_price(existing_user_cart)
            result = collection.update_one({"username": username}, {"$set": existing_user_cart})
    else:
        cart = Cart(username=username,
                    total_price=0,
                    products=[item])
        cart_dict = calculate_total_price(cart.__dict__)
        result = collection.insert_one(cart_dict)
    return result

def update_cart_with_multiple_product_id_and_quantity(username:str, list_data: list[dict]):
    collection = db['Carts']
    existing_user_cart = collection.find_one({"username": username})
    if not existing_user_cart or len(existing_user_cart['products']) < len(list_data):
        return False
    else:
        list_product_in_cart = existing_user_cart['products']
        for i in list_data:
            if i['product_code'] not in [j['product_code'] for j in list_product_in_cart]:
                return False
        for i in range(len(list_product_in_cart)):
            for j in list_data:
                if list_product_in_cart[i]['product_code'] == j['product_code']:
                    list_product_in_cart[i]['quantity'] = j['quantity']    
                    if list_product_in_cart[i]['quantity'] <= 0:
                        return False
        existing_user_cart['products'] = list_product_in_cart
        existing_user_cart = calculate_total_price(existing_user_cart)
        result = collection.update_one({"username": username}, {"$set": existing_user_cart})
        if result:
            return True
        return False

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


# ================== Order ==================

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
