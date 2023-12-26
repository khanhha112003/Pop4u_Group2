from typing import List
from schemas import Product
def listProductSerializer(listdict: list[dict]) -> List[Product]:
    for dict in listdict:
        dict.pop("_id", None)
    return [Product(**dict) for dict in listdict]

def productSerializer(dict) -> Product:
    return Product(**dict)