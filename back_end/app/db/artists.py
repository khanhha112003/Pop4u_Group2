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
    result = collection.insert_one(artist.__dict__)
    return result

def update_artist_by_id(artist: Artist):
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
