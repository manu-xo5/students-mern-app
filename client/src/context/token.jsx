import { createContext, useContext, useReducer } from "react";

const TokenContext = createContext(null);

const tokenReducer = (_, token) => {
  localStorage.setItem("token", token);
  return token;
};

const TokenProvider = (props) => {
  const [token, setToken] = useReducer(
    tokenReducer,
    "",
    () => localStorage.getItem("token") || ""
  );
  return <TokenContext.Provider value={{ token, setToken }} {...props} />;
};

const useToken = () => useContext(TokenContext);

export { TokenProvider, useToken };
