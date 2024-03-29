from schemas import User
def userEntity(user) -> dict:
    return {
        "name": user["name"],
        "username": user["username"],
        "email": user["email"],
        "role": user["role"],
        "photo": user["photo"],
        "verified": user["verified"],
        "password": user["password"],
        "created_at": user["created_at"],
        "updated_at": user["updated_at"]
    }

def userSerializer(dict) -> User:
    return User(**dict)

def listUserSerializer(list_dict) -> list[User]:
    return [userSerializer(i) for i in list_dict]
