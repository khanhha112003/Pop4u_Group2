import datetime, json
from pymongo.mongo_client import MongoClient
from database import db

def get_product_by_id(id: str) :
    collection = db['Products']
    product = collection.find_one({"_id": id})
    return product

def get_list_product(page: int, limit: int):
    collection = db['Products']
    list_product = collection.find().skip((page-1)*limit).limit(limit)
    return list_product
def get_list_product_by_category(category: str, page: int, limit: int):
    collection = db['Products']
    list_product = collection.find({"category": category}).skip((page-1)*limit).limit(limit)
    return list_product

def get_list_product_by_name(name: str, page: int, limit: int):
    collection = db['Products']
    list_product = collection.find({"name": {"$regex": name}}).skip((page-1)*limit).limit(limit)
    return list_product

def get_list_product_by_price(price: float, page: int, limit: int):
    collection = db['Products']
    list_product = collection.find({"price": {"$lte": price}}).skip((page-1)*limit).limit(limit)
    return list_product

def get_list_product_by_rating(rating: float, page: int, limit: int):
    collection = db['Products']
    list_product = collection.find({"rating": {"$gte": rating}}).skip((page-1)*limit).limit(limit)
    return list_product

def get_list_product_by_category_and_name(category: str, name: str, page: int, limit: int):
    collection = db['Products']
    list_product = collection.find({"category": category, "name": {"$regex": name}}).skip((page-1)*limit).limit(limit)
    return list_product

def update_product_rating(id: str, rating: float):
    collection = db['Products']
    product = collection.find_one({"_id": id})
    if product is None:
        return False
    else:
        product["num_of_rating"] += 1
        product["rating"] = (product["rating"]*(product["num_of_rating"]-1) + rating)/product["num_of_rating"]
        result = collection.update_one({"_id": id}, {"$set": product})
        return result
