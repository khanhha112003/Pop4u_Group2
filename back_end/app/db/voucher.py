from database import db
from schemas import Voucher

# admin specific function
def get_all_voucher():
    collection = db['Vouchers']
    list_voucher = collection.find({})
    res = list(list_voucher)
    for i in res:
        i.pop('_id', None)
    return res

def update_voucher_by_code(voucher_code: str, voucher: Voucher):
    collection = db['Vouchers']
    result = collection.update_one({"voucher_code": voucher_code}, {"$set": voucher.__dict__})
    return result

def delete_voucher_by_code(voucher_code: str):
    collection = db['Vouchers']
    result = collection.delete_one({"code": voucher_code})
    return result

def insert_voucher(voucher: Voucher):
    collection = db['Vouchers']
    if collection.find_one({"code": voucher.code}):
        return False
    result = collection.insert_one(voucher.__dict__)
    return result

# user specific function
def validate_voucher(voucher_code: str):
    collection = db['Vouchers']
    voucher = collection.find_one({"voucher_code": voucher_code})
    serialized_voucher = Voucher(**voucher)
    if serialized_voucher.is_active:
        return 1, serialized_voucher.discount_amount
    elif serialized_voucher.number_of_use <= 0:
        return 0, 0
    elif not serialized_voucher.is_active:
        return -1, 0
    return None