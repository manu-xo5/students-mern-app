import { createContext, useContext, useReducer } from 'react';
import Api from '../helpers/api';
import useQuery from '../hooks/useQuery';
import { useToken } from './token';

const init = { isLogged: false };
const UserContext = createContext(null);

const UserProvider = props => {
  const { token, setToken } = useToken();
  const [c, refreshUser] = useReducer(c => ++c, 0);

  const fetchMe = async () => {
    if (!token) return init;
    const { student } = await Api.me(token);
    return student;
  };

  const { data: user } = useQuery(['user', token, c], fetchMe, init);

  const login = async ({ name, password }) => {
    const { token } = await Api.login({ name, password });
    if (token) setToken(token);
  };

  const signup = async ({
    name,
    password,
    phone,
    dob,
    college,
    address,
    identity,
    note,
  }) => {
    const { token } = await Api.signup({
      name,
      password,
      phone,
      dob,
      college,
      address,
      identity,
      note,
    });
    if (token) setToken(token);
  };

  const updateNote = async note => {
    const res = await Api.updateProfile({ token, note });
    refreshUser();
    return res;
  };

  const logout = () => setToken('');

  const deleteAccount = () => {
    const isSure = window.confirm(
      `Sure wanna delete this ${user.name} Account?`
    );
    if (!isSure) return;
    const { error } = Api.deleteProfile(token);
    if (!error) setToken('');
  };

  return (
    <UserContext.Provider
      value={{ user, login, signup, updateNote, logout, deleteAccount }}
      {...props}
    />
  );
};
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
