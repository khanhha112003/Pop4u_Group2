from typing import Optional
from database import db
from schemas import Artist

# admin specific function
def drop_artist_collection():
    collection = db['Artists']
    try:
        collection.drop()
        return True
    except:
        return False

def insert_artist(artist: Artist):
    collection = db['Artists']
    artist_dict = artist.__dict__
    number_of_artist = collection.count_documents({})   
    artist_dict["_id"] = number_of_artist + 1
    result = collection.insert_one(artist_dict)
    return result

def update_artist(artist: Artist):
    collection = db['Artists']
    result = collection.update_one({"artist_code": artist.artist_code}, {"$set": artist.__dict__})
    return result

def delete_artist_by_code(artist_code: str):
    collection = db['Artists']
    result = collection.delete_one({"artist_code": artist_code})
    return result


# global user function
def get_total_artist(alphabet: Optional[str] = None):
    collection = db['Artists']
    if alphabet:
        total_artist = collection.count_documents({"name": {"$regex": "^" + alphabet, "$options": "i"}})
    else:
        total_artist = collection.count_documents({})
    return total_artist

def get_list_artist_with_special_filter(type_filter: str, limit: int):
    collection = db['Artists']
    if type_filter == "hot":
        list_artist = collection.find({"is_hot": True}).limit(limit)
        return list(list_artist)
    elif type_filter == "new":
        list_artist = collection.find({}).sort("created_at", -1).limit(limit)
        return list(list_artist)

def get_artist_by_id(artist_code: str) :
    collection = db['Artists']
    artist = collection.find_one({"artist_code": artist_code})
    return artist

def get_artist_list(page: int,
                    limit: int,
                    alphabet: Optional[str] = None):
     collection = db['Artists']
     if alphabet:
          list_artist = collection.find({"name": {"$regex": "^" + alphabet, "$options": "i"}}).skip((page-1)*limit).limit(limit)
     else:
          list_artist = collection.find({}).skip((page-1)*limit).limit(limit)
     return list(list_artist)

def get_artist_list_by_name(artist_name):
    collection = db['Artists']
    list_artist = collection.find({"name": {"$regex": artist_name, "$options": "i"}})
    return list_artist

