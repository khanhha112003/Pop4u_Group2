import { createContext, useContext, useEffect, useState } from 'react';
import { getToken, removeToken } from './app_logic/Authenticate';
import { basicPostRequest } from './app_logic/APIHandler';
const AuthContext = createContext({
  auth: null,
  setAuth: () => { },
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token === undefined || token === '') setAuth(false);
    if (token !== undefined || token !== '') {
      setAuth(true);
      basicPostRequest('/auth/check_token')
        .then((response) => {
          if (response.data.status === 0) {
            console.log(response.data);
            removeToken();
            setAuth(false);
          } else {
            setAuth(true);
          }
        })
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;