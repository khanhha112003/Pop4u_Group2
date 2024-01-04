from fastapi import APIRouter, Depends, HTTPException
from oauth2 import get_user_or_none

from schemas import Artist
from typing import List, Optional
from serializer.artist_serializer import *
from db.artists import * 

router = APIRouter()

def tracking_user(username, action, data):
    pass

@router.get('/artist_list')
def get_list_artist(page: int = 1, 
                    limit: int = 10, 
                    type_filter: str = "normal",
                    alphabet: Optional[str] = None, 
                    usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException or usr == None :
        print("no user") 
    else:
        tracking_user(usr.username, "get_list_artist", {"page":page, "limit":limit, "alphabet":alphabet})
    if page < 1:
        page = 1
    if type_filter == "all":
        total = get_total_artist(alphabet)
        list_artist = get_artist_list(page, limit, alphabet)
        if total == 0:
            return {"total": 0, "list_artist": []}
        return {"total":total, "list_artist": listArtistSerializer(list_artist)}
    else:
        list_artist = get_list_artist_with_special_filter(type_filter, 4)
        return listArtistSerializer(list_artist)

@router.get('/artist', response_model=Artist)
def get_artist(artist_code):
    res = get_artist_by_id(artist_code)
    if res:
        return artistSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Artist not found")

@router.get('/search_artist', response_model=List[Artist])
def get_list_artist_by_name(artist_name):
    res = get_artist_list_by_name(artist_name)
    if res:
        return listArtistSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Artist not found")

@router.post('/create_artist')
def create_artist(artist: Artist, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = insert_artist(artist)
        if res:
            return {"res":"created"}
        
@router.put('/update_artist')
def update_artist(artist: Artist, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = update_artist_by_id(artist)
        if res:
            return {"res":"updated"}
        else:
            raise HTTPException(status_code=404, detail="Artist not found")

@router.delete('/delete_artist')
def delete_artist(artist_code, usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = delete_artist_by_code(artist_code)
        if res:
            return {"res":"deleted"}
        else:
            raise HTTPException(status_code=404, detail="Artist not found")

@router.delete('/delete_all_artist')
def delete_all_artist(usr = Depends(get_user_or_none)):
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = drop_artist_collection()
        if res:
            return {"res":"deleted"}
        else:
            raise HTTPException(status_code=404, detail="Artist not found")