import { createContext, useContext, useEffect, useState } from 'react';
import { getToken, removeToken } from './app_logic/Authenticate';
import { basicPostRequest } from './app_logic/APIHandler';
const AuthContext = createContext({
  auth: null,
  setAuth: () => { },
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token === undefined || token === '' || token === null) 
    {
      setAuth(false);
    } else {
      basicPostRequest('/auth/check_token', {})
        .then((response) => {
          if (response.data.status === 0) {
            console.log('Token expired');
            removeToken();
            setAuth(false);
          } else {
            console.log('Token valid');
            setAuth(true);
          }
        }). catch((error) => {
          console.log(error);
          removeToken();
          setAuth(false);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;