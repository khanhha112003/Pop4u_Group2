import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { loginPostRequest } from "../app_logic/APIHandler";
import axios from "axios";
import { BASE_URL } from "../app_logic/APIHandler";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (params) => {
    const { dataPass, callback } = params;
    try {
        const response = await axios.post(
            BASE_URL + '/auth/login', 
            { username: dataPass.username, password: dataPass.password }, 
            {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        );
        if (response.data.status === 1) {
            setUser(response.data);
            console.log("login success");
            navigate("/", { replace: true });
        } else {
            console.log("login fail");
            callback(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
  };

  const logout = async (callback) => {
    const token = 'Bearer ' + user.access_token;
    try {
        const response = await axios.post(
            BASE_URL + '/auth/logout', 
            {headers: {'content-type': 'application/json',
                        'Authorization': token}}
        );
        if (response.data.status === 1) {
            setUser(null);
            console.log("logout success");
            navigate("/", { replace: true });
        } else {
            console.log("logout fail");
            callback(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useTestContext must be used within TestProvider')
  }
  return context
};
