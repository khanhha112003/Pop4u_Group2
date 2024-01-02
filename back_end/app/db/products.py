from typing import Optional
from database import db
from schemas import Product, ProductReview

# admin specific function
def drop_product_collection():
    collection = db['Products']
    try:
        collection.drop()
        return True
    except:
        return False

def insert_product(product: Product):
    collection = db['Products']
    result = collection.insert_one(product.__dict__)
    return result

def update_product_by_id(product: Product):
    collection = db['Products']
    result = collection.update_one({"product_name": product.product_name}, {"$set": product.__dict__})
    return result

def delete_product(product_name: str):
    collection = db['Products']
    result = collection.delete_one({"product_name": product_name})
    return result


# global user function
def get_total_product(category: Optional[str] = None,
                      artist_code: Optional[str] = None,
                      price_range_start: Optional[float] = None, 
                      price_range_end: Optional[float] = None, 
                      rating: Optional[float] = None):
    collection = db['Products']
    if category:
        total_product = collection.count_documents({"category": category})
    elif price_range_start or price_range_end:
        if price_range_start == None:
            price_range_start = 0
        if price_range_end == None:
            price_range_end = 1000000000000000
        total_product = collection.count_documents({"sell_price": {"$gte": price_range_start, "$lte": price_range_end}})
    elif rating:
        total_product = collection.count_documents({"rating": {"$gte": rating}})
    elif category and price_range_start and price_range_end and rating:
        total_product = collection.count_documents({"category": category, "sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}})
    elif artist_code:
        total_product = collection.count_documents({"artist_code": artist_code})
    else:
        total_product = collection.count_documents({})
    return total_product

def get_product_list_by_name(keyword: str):
    collection = db['Products']
    list_product = collection.find({"product_name": {"$regex": keyword, "$options": "i"}})
    return list(list_product)

def get_product_detail_by_code(product_code: str) :
    collection = db['Products']
    product = collection.find_one({"product_code": product_code})
    return product

def get_product_list(
                    page: int,
                    limit: int, 
                    order: str = "asc",
                    artist_code: Optional[str] = None,
                    category: Optional[str] = None,
                    price_range_start: Optional[float] = None,
                    price_range_end: Optional[float] = None,
                    rating: Optional[float] = None):
    collection = db['Products']
    if price_range_start == None:
        price_range_start = 0
    if price_range_end == None:
        price_range_end = 1000000000000000
    if rating == None:
        rating = 0
    if artist_code:
        if order == "asc":
            list_product = collection.find({"artist_code": artist_code, "category": category, "sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}}).sort("sell_price", 1).skip((page-1)*limit).limit(limit)
        else:
            list_product = collection.find({"artist_code": artist_code, "category": category, "sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}}).sort("sell_price", -1).skip((page-1)*limit).limit(limit)
        return list(list_product)
    if category:
        if order == "asc":
            list_product = collection.find({"category": category, "sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}}).sort("sell_price", 1).skip((page-1)*limit).limit(limit)
        else:
            list_product = collection.find({"category": category, "sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}}).sort("sell_price", -1).skip((page-1)*limit).limit(limit)
        return list(list_product)
    if order == "asc":
        list_product = collection.find({"sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}}).sort("sell_price", 1).skip((page-1)*limit).limit(limit)
    else:
        list_product = collection.find({"sell_price": {"$gte": price_range_start, "$lte": price_range_end}, "rating": {"$gte": rating}}).sort("sell_price", -1).skip((page-1)*limit).limit(limit)
    return list(list_product)

def get_list_product_with_special_filter(filterType: str, artist_code: str, limit):
    if filterType == "related":
        collection = db['Products']
        list_product = collection.find({"artist_code": artist_code}).limit(limit)
        return list(list_product)
    elif filterType == "hot":
        collection = db['Products']
        list_product = collection.find({"is_hot": True}).limit(limit)
        return list(list_product)
    elif filterType == "sale":
        collection = db['Products']
        list_product = collection.find({"is_sale": True}).limit(limit)
        return list(list_product)
    elif filterType == "new":
        collection = db['Products']
        list_product = collection.find({"is_new": True}).limit(limit)
        return list(list_product)

def update_product_review(product_code, review: ProductReview):
    collection = db['Products']
    product = collection.find_one({"product_code": product_code})
    if product is None:
        return False
    else:
        if not review.username:
            return False
        if review.rating < 0 or review.rating > 5:
            return False
        if review.rating == None and review.review == None:
            return False
        if review.rating != None:
            product["num_of_rating"] += 1
            product["rating"] = (product["rating"]*(product["num_of_rating"]-1) + review.rating)/product["num_of_rating"]
        review.re
        result = collection.update_one({"product_code": product_code}, {"$set": product})
        return result

def get_product_review(product_code: str, username: str):
    collection = db['ProductReviews']
    product = collection.find_one({"product_code": product_code, "username": username})
    if product is None:
        return None
    else:
        return product["reviews"]