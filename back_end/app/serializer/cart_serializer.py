from schemas import Cart, CartItem, Orde

def cartSerializer(dict) -> Cart:
    return Cart(**dict)

def cartItemSerializer(dict) -> CartItem:
    return CartItem(**dict)