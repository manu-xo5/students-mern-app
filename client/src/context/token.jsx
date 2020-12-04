import { createContext, useContext, useState } from 'react';

const TokenContext = createContext(null);

const TokenProvider = props => {
  const [token, setToken] = useState('');
  return <TokenContext.Provider value={{ token, setToken }} {...props} />;
};

const useToken = () => useContext(TokenContext);

export { TokenProvider, useToken };
