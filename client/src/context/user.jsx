import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import Api from '../helpers/api';
import { useToken } from './token';

const init = { isLogged: false };
const UserContext = createContext(null);

const UserProvider = props => {
  const { token, setToken } = useToken();
  const { data: user } = useFetch({
    key: [token],
    initState: init,
    query: async () => {
      const { student, error } = await Api.me(token);
      if (error) return init;
      return { ...student, isLogged: true };
    },
  });

  const login = async ({ name, password }) => {
    const { token, error } = await Api.login({ name, password });
    console.log('token', token);
    if (error) return alert(error);
    setToken(token);
  };

  return <UserContext.Provider value={{ user, login }} {...props} />;
};
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
