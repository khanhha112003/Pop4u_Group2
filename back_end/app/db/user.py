from database import db
from schemas import User
from datetime import datetime
from hashing import Hash

# admin specific function
def get_user_by(field: str, value: str) :
    collection = db['Users']
    user = collection.find_one({field: value})
    if user:
        return user
    return None

def get_user(type_user):
    collection = db['Users']
    if type_user == "all":
        list_user = collection.find({})
    else:
        list_user = collection.find({"role": type_user})
    list_user_converted: list[dict] = list(list_user)
    for i in list_user_converted:
        i.pop('_id', None)
    return list_user_converted
    
# global user function
def insert_user(request: User):
    hashed_pass = Hash.bcrypt(request.password)
    user_object = dict(request)
    find_usr = db["Users"].find_one({"username":request.username})
    if find_usr:
        return {"status": 0, "message": "Tài khoản đã tồn tại"}
    find_usr = db["Users"].find_one({"phone_number":request.phone_number})
    if find_usr:
        return {"status": 0, "message": "Số điện thoại đã được sử dụng"}
    user_object["password"] = hashed_pass
    user_object["role"] = "user"
    user_object["verified"] = False
    user_object["email"] = request.email
    user_object["fullname"] = request.fullname
    user_object["phone_number"] = request.phone_number
    user_object["username"] = request.username
    user_object["birthdate"] = request.birthdate
    user_object["created_at"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    user_object["updated_at"] = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    req = db["Users"].insert_one(user_object)
    if req:
        return True
    return False

def update_user_by_id(user: User):
    collection = db['Users']
    result = collection.update_one({"username": user.username}, {"$set": user.__dict__})
    return result



