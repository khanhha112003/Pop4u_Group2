from typing import Optional
from database import db
from schemas import User

# admin specific function
def drop_user_collection():
    collection = db['Users']
    try:
        collection.drop()
        return True
    except:
        return False
    
def insert_user(user: User):
    collection = db['Users']
    result = collection.insert_one(user.__dict__)
    return result

def update_user_by_id(user: User):
    collection = db['Users']
    result = collection.update_one({"username": user.username}, {"$set": user.__dict__})
    return result

def delete_user_by_username(username: str):
    collection = db['Users']
    result = collection.delete_one({"username": username})
    return result


# global user function
def get_total_user():
    collection = db['Users']
    total_user = collection.count_documents({})
    return total_user

def get_user_by(field: str, value: str) :
    collection = db['Users']
    user = collection.find_one({field: value})
    if user:
        return user
    return None


