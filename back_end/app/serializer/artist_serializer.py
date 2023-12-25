from schemas import Artist

def listArtistSerializer(listdict: list[dict]) -> [Artist]:
    return [Artist(**dict) for dict in listdict]

def artistSerializer(dict) -> Artist:
    return Artist(**dict)