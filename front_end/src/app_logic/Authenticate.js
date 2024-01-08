export function saveToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
}

export function getToken() {
    const tokenString = localStorage.getItem('token');
    if (tokenString === null) {
        return null;
    }
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token
}

export function removeToken() {
    localStorage.removeItem('token');
}

export function getUserRole() {
    const tokenString = localStorage.getItem('token');
    if (tokenString === null) {
        return null;
    }
    const userToken = JSON.parse(tokenString);
    return userToken?.role
}
