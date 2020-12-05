import { createContext, useContext, useEffect, useState } from "react";
import Api from "../helpers/api";
import { useToken } from "./token";

const init = { isLogged: false };
const UserContext = createContext(null);

const UserProvider = (props) => {
  const { token, setToken } = useToken();
  const [user, setUser] = useState(init);

  useEffect(() => {
    const _main = async () => {
      const { student, error } = await Api.me(token);
      if (error) setUser(init);
      else setUser({ ...student, isLogged: true });
    };
    _main();
  }, [token]);

  const login = async ({ name, password }) => {
    const { token, error } = await Api.login({ name, password });
    console.log("token", token);
    if (error) return alert(error);
    setToken(token);
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
    const { token, error } = await Api.signup({
      name,
      password,
      phone,
      dob,
      college,
      address,
      identity,
      note,
    });
    if (error) return alert(error);
    setToken(token);
  };

  const updateNote = (note) => Api.updateProfile({ token, note });

  const logout = () => setToken("");

  return (
    <UserContext.Provider
      value={{ user, login, signup, updateNote, logout }}
      {...props}
    />
  );
};
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
