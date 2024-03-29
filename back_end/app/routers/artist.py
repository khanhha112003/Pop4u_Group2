from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
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
        print("no user -- artist_list") 
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

@router.get('/artist_detail', response_model=Artist)
def get_detail_artist(artist_code):
    res = get_artist_by_code(artist_code)
    if res:
        return artistSerializer(res)
    else:
        raise HTTPException(status_code=404, detail="Artist not found")


'''
========================= Admin feature ======================================
'''
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
        else:
            raise HTTPException(status_code=404, detail="Artist not found")
        
@router.post('/update_artist')
def modify_artist(artist: Artist, usr = Depends(get_user_or_none)):
    print(usr)
    if type(usr) == HTTPException:
        raise usr
    elif usr == None or usr.role != "admin":
        raise HTTPException(status_code=401, detail="Invalid user")
    else:
        res = update_artist(artist)
        if res:
            return {"status": 1}
        else:
            raise HTTPException(status_code=404, detail="Artist not found")

@router.delete('/delete_artist')
def delete_artist(artist_code: str, usr = Depends(get_user_or_none)):
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
