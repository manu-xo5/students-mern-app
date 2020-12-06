import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Api from "../helpers/api";
import { useToken } from "./token";

const init = { isLogged: false };
const UserContext = createContext(null);

const UserProvider = (props) => {
  const { token, setToken } = useToken();
  const [user, setUser] = useState(init);
  const [count, incCounter] = useReducer((p) => ++p, 0);

  useEffect(() => {
    const _main = async () => {
      if (!token) return setUser(init);

      const { student, error } = await Api.me(token);
      if (error) setUser(init);
      if (student) setUser({ ...student, isLogged: true });
    };
    _main();
  }, [token, count]);

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

  const updateNote = async (note) => {
    const res = await Api.updateProfile({ token, note });
    incCounter();
    return res;
  };

  const logout = () => setToken("");

  const deleteAccount = () => {
    const isSure = window.confirm(
      `Sure wanna delete this ${user.name} Account?`
    );
    if (!isSure) return;
    const { error } = Api.deleteProfile(token);
    if (!error) setToken("");
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
