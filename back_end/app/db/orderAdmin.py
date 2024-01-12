from typing import Optional
from database import db
from schemas import Cart, Order, CartItem, OrderForm
from db.products import get_product_detail_by_code

def get_all_order():
    collection = db['Orders']
    list_order = collection.find({}, {'_id': 0})
    list_order_converted: list[dict] = list(list_order)
    return [Order(**i) for i in list_order_converted]

def get_order_by_order_code(order_code):
    collection = db['Orders']
    res = collection.find_one({"order_code": order_code})
    if res == None:
        return None
    return Order(**res)

def update_order_state(order_code, state):
    collection = db['Orders']
    res = collection.update_one({"order_code": order_code}, {"$set": {"status": state}})
    if res.modified_count == 1:
        return True
    return False