# this is a demo server for testing, this demo demonstrates how to use fastapi to build a server
# also this server response has some dummy data to test the front end
# if you want more information about fastapi, please visit https://fastapi.tiangolo.com/

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:3000/#",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

list_all_product = [
    {
        "product_id": 1,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "discount_price": 0,
        "sell_price": 300,
        "rating": 4,
        "rating_detail": "100+",
        "num_of_rating": 100,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 2,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "sell_price": 300,
        "rating": 4,
        "rating_detail": "100+",
        "num_of_rating": 100,
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 3,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "sell_price": 300,
        "rating": 4,
        "num_of_rating": 100,
        "rating_detail": "100+",
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 4,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "discount_price": 200,
        "sell_price": 300,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "rating": 4,
        "rating_detail": "",
        "num_of_rating": 100,
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 5,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 0,
        "sell_price": 300,
        "rating": 4,
        "rating_detail": "100+",
        "num_of_rating": 100,
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 6,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 0,
        "sell_price": 300,
        "rating": 0,
        "rating_detail": "",
        "num_of_rating": 0,
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 7,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "sell_price": 300,
        "rating": 4,
        "rating_detail": "",
        "num_of_rating": 100,
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 8,
        "product_name": "BTS Photocard",
        "options": [],
        "special_badge": [],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "sell_price": 300,
        "rating": 4,
        "rating_detail": "",
        "num_of_rating": 100,
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    },
    {
        "product_id": 9,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["sale"],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 100,
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "rating": 4.5,
        "num_of_rating": 100,
        "rating_detail": "",
    },
    {
        "product_id": 10,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["sale"],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 100,
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "rating": 4.5,
        "rating_detail": "100k dánh giá",
        "num_of_rating": 200,
    },
    {
        "product_id": 11,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "special_badge": ["sale", "free_ship"],
        "discount_price": 100,
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "rating": 4.5,
        "rating_detail": "",
        "num_of_rating": 200,
    },
    {
        "product_id": 12,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "special_badge": ["new"],
        "discount_price": 0,
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "rating": 4.5,
        "num_of_rating": 200,
    },
    {
        "product_id": 13,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["new"],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 0,
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "rating": 4.5,
        "rating_detail": "",
        "num_of_rating": 200,
    },
    {
        "product_id": 14,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["new"],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "rating": 4.5,
        "rating_detail": "",
        "num_of_rating": 200,
    },
    {
        "product_id": 15,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["new", "free_ship"],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "num_of_rating": 200,
        "rating": 4.5,
        "rating_detail": "",
    },
    {
        "product_id": 16,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["new"],
        "discount_price": 0,
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "num_of_rating": 200,
        "rating": 4.5,
        "rating_detail": "",
    },
    {
        "product_id": 17,
        "product_name": "new product",
        "sell_price": 100,
        "options": [],
        "special_badge": ["new", "free_ship"],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 0,
        "img_product": "https://picsum.photos/id/237/200/300",
        "product_stock": 100,
        "num_of_rating": 200,
        "rating": 4.5,
        "rating_detail": "",
    },
]

list_artist = [
    {
        "_id": 1,
        "artist_name": "BTS",
        "artist_code": "BT01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 2,
        "artist_name": "BLACKPINK",
        "artist_code": "BP01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/b5d47b7be6a10edef21b0c0fd540070a.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 3,
        "artist_name": "AKMU",
        "artist_code": "AK01",
        "is_hot": True,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/a71dfd00d885900028b2a5eff299cac0.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 4,
        "artist_name": "aespa",
        "artist_code": "AE01",
        "is_hot": True,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/172e79184516dec7a6f118819cec8ca8.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 5,
        "artist_name": "Red Velvet",
        "artist_code": "RV01",
        "is_hot": True,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/9db30ee4beee84ccfa34cc666dd9bab2.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 6,
        "artist_name": "ENHYPEN",
        "artist_code": "EN01",
        "is_hot": True,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/f462ef5ce093216a406278be185251de.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 7,
        "artist_name": "SEVENTEEN",
        "artist_code": "SV01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/273ee7353a1620265d6de139e701c436.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 8,
        "artist_name": "LE SSERAFIM",
        "artist_code": "LS02",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/ab48196091bf17320c8bff2218584387.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 9,
        "artist_name": "NewJeans",
        "artist_code": "NJ01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/75e08c44ce98ea4f1b0604ac36228512.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 10,
        "artist_name": "SUNMI",
        "artist_code": "SU01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/9154faaa1050dbc55829e92e54856393.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 11,
        "artist_name": "OH MY GIRL",
        "artist_code": "OM01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/eefcd551089d3a588ca2fcd20800f346.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 12,
        "artist_name": "EXO",
        "artist_code": "EX01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/08e1a9f51aac3bf43e3d381163507f05.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 13,
        "artist_name": "NCT 127",
        "artist_code": "NC01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/2cfe5977d532c68f99c08cd62ef2fae6.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 14,
        "artist_name": "SUPER JUNIOR",
        "artist_code": "SJ01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/cf722fbd074ae9b2828e92971f49178a.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 15,
        "artist_name": "TREASURE",
        "artist_code": "TS01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/393f7042c383d1a82deb7e865abb5dec.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 16,
        "artist_name": "WINNER",
        "artist_code": "WN01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/7e438920daa6bfc9a1897851bd058a17.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 17,
        "artist_name": "EVERGLOW",
        "artist_code": "EV01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/7fa748dd30c94ac5c0567ee73c9d1657.png?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 18,
        "artist_name": "(G)I-DLE",
        "artist_code": "GI01",
        "is_hot": False,
        "artist_logo": "https://cdn-contents.weverseshop.io/public/shop/162aaf70b2bb514aab85863ee4d89f66.jpg?q=95&w=512",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 19,
        "artist_name": "TWICE",
        "artist_code": "TW01",
        "is_hot": False,
        "artist_logo": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/dbliral-2294cde8-78db-4be6-8a53-0f1e7fd5fee2.png/v1/fill/w_856,h_933/_twice__logo___png_by_tsukinofleur_dbliral-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAyMSIsInBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGJsaXJhbC0yMjk0Y2RlOC03OGRiLTRiZTYtOGE1My0wZjFlN2ZkNWZlZTIucG5nIiwid2lkdGgiOiI8PTE4NTUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VvYLaYtREwN8Xmyq9zVpQvbjiSTs2u8a7X2Z5_Zli8Y",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 20,
        "artist_name": "Stray Kids",
        "artist_code": "SK01",
        "is_hot": False,
        "artist_logo": "https://i.pinimg.com/originals/88/12/72/881272bc899c59771fc6884f3c5a9347.jpg",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 21,
        "artist_name": "LISA",
        "artist_code": "LS01",
        "is_hot": False,
        "artist_logo": "https://thanhnien.mediacdn.vn/Uploaded/trucdl/2021_12_30/moneycualisalapkyluc3-8661.png",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    },
    {
        "_id": 22,
        "artist_name": "JISOO",
        "artist_code": "JS01",
        "is_hot": False,
        "artist_logo": "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/29/1099051/209419948_8601681615.jpg",
        "artist_avatar": "https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg?q=95&w=512"
    }
]

@app.get("/api/product_list")
def product_list(type: str = None):
    if type == "all":
        return list_all_product
    if type == 'sale':
        return list(filter(lambda x: x['discount_price'] > 0, list_all_product))
    if type == 'new':
        return list(filter(lambda x: 'new' in x['special_badge'], list_all_product))
        
@app.get("/api/artist_list")
def get_artist(type: str = None, alphabet: str = None):

    if type == 'all':
        return list_artist

    if type == 'hot':
        return list(filter(lambda x: x['is_hot'] == True, list_artist))
    
    if type == 'alphabet':
        from functools import reduce
        return reduce(lambda x, y: x + y, [list(filter(lambda x: x['name'][0] == i, list_artist)) for i in alphabet])

@app.get("/api/product_detail")
def get_product_detail(product_id: int = None):
    # return list(filter(lambda x: x['product_id'] == product_id, list_all_product))[0]
    return {
        "product_id": 5,
        "product_name": "BTS Photocard",
        "options": ["ver1", "ver2"],
        "special_badge": [],
        "list_product_image": [
            "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
            "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
            "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
            "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
        ],
        "description": 'CD; OUT BOX; PHOTOBOOK : 52p; ACCORDION LYRICS BOOK : 10p; DOUBLE SIDE FOLDED POSTER : Random 1p out of 4p; POLAROID PHOTOCARD : Random 1p out of 8p; PHOTO ZINE : 16p; SITKCER SET : 6sheet; PHOTO CARD SET : 4p',
        "discount_price": 0,
        "sell_price": 300,
        "rating": 4,
        "num_of_rating": 1,
        "rating_detail": "",
        "img_product": "https://product.hstatic.net/200000416387/product/upload_77d2eeab8b3a4a68b72b716e4558938a_master.jpg",
    }

@app.get("/api/user_rating")
def get_user_rating(product_id: int = None):
    return {
        "rating": 4,
    }
