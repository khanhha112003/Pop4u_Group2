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


@app.get("/test_product")
def root():
    return [
        {
            "product_name": "test_product",
            "sell_price": 100,
            "discount_price": 100,
            "img_product": "https://picsum.photos/id/237/200/300",
            "product_stock": 100,
            "rating": 4.5,
        },
        {
            "product_name": "test_product",
            "sell_price": 100,
            "discount_price": 100,
            "img_product": "https://picsum.photos/id/237/200/300",
            "product_stock": 100,
            "rating": 4.5,
        },
        {
            "product_name": "test_product",
            "sell_price": 100,
            "discount_price": 100,
            "img_product": "https://picsum.photos/id/237/200/300",
            "product_stock": 100,
            "rating": 4.5,
        },
        {
            "product_name": "test_product",
            "sell_price": 100,
            "discount_price": 0,
            "img_product": "https://picsum.photos/id/237/200/300",
            "product_stock": 100,
            "rating": 3,
        }
    ]

