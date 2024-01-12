from typing import Optional
from database import db
from schemas import Cart, Order, CartItem, OrderForm
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

def update_cart_with_multiple_product_id_and_quantity(username:str, list_data: list[dict], is_created_order: bool = False):
    collection = db['Carts']
    existing_user_cart = collection.find_one({"username": username})
    if not existing_user_cart or len(existing_user_cart['products']) < len(list_data):
        return False
    else:
        list_product_in_cart: list[dict] = existing_user_cart['products']
        if not is_created_order:
            for i in list_data:
                if i['product_code'] not in [j['product_code'] for j in list_product_in_cart]:
                    return False
            for i in range(len(list_product_in_cart)):
                for j in list_data:
                    if list_product_in_cart[i]['product_code'] == j['product_code']:
                        if j['quantity'] > 0:
                            list_product_in_cart[i]['quantity'] = j['quantity']    
                            if list_product_in_cart[i]['quantity'] <= 0:
                                return False
                        else:
                            list_product_in_cart.pop(i)
                            i -= 1
            existing_user_cart['products'] = list_product_in_cart
            existing_user_cart = calculate_total_price(existing_user_cart)
            result = collection.update_one({"username": username}, {"$set": existing_user_cart})
            if result:
                return True
            return False
        else:
            list_modify_product_code = [i['product_code'] for i in list_data]
            new_list_product_in_cart = filter(lambda x: x['product_code'] not in list_modify_product_code, list_product_in_cart)
            existing_user_cart['products'] = list(new_list_product_in_cart)
            existing_user_cart = calculate_total_price(existing_user_cart)
            result = collection.update_one({"username": username}, {"$set": existing_user_cart})
            if result:
                return True
            

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
import random
import string
import datetime

def generate_order_code(length=4):
    # Define the characters to be used in the order code
    characters = string.ascii_uppercase

    # Generate a random order code with the specified length
    order_code = ''.join(random.choice(characters) for _ in range(length))

    return order_code

def lowest_price_of_product(product: dict):
    if product['discount_price'] == 0:
        return product['sell_price']
    return product['discount_price']

def create_order(order: OrderForm, username: Optional[str] = None):
    collection = db['Orders']
    cart = get_cart_by_username(username)
    if not cart:
        return None
    current_string_date = datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    str_date_code = current_string_date[0:2] + current_string_date[3:5] + current_string_date[6:10]
    new_code = str_date_code + generate_order_code()
    while collection.find_one({"order_code": new_code}):
        new_code = new_code + generate_order_code()
        # product_final_price
    for info in order.order_product_info:
        info['product']['product_final_price'] = lowest_price_of_product(info['product'])
    newOrder = Order(username=username,
                     order_code=new_code,
                     order_date= current_string_date,
                     total_price=order.total_price,
                     order_product_info=order.order_product_info,
                     status="Pending",
                     is_paid= order.is_paid,
                     is_buy_now= order.is_buy_now,
                     coupon_code=order.coupon_code,
                     address=order.address,
                     payment_method=order.payment_method,
                     phone=order.phone,
                     shipping_price=order.shipping_price)
    result = collection.insert_one(newOrder.__dict__)
    if result:
        if username and not newOrder.is_buy_now:
            list_update_info = []
            for i in order.order_product_info:
                temp_dict = {}
                temp_dict['product_code'] = i['product']['product_code']
                temp_dict['quantity'] = 0
                list_update_info.append(temp_dict)
            return update_cart_with_multiple_product_id_and_quantity(username, list_update_info, True)
        else:
            return True
    return False
