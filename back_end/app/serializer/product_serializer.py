from schemas import Product
def listProductSerializer(listdict: list[dict]) -> [Product]:
    return [Product(**dict) for dict in listdict]