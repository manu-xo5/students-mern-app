import { Redirect, Route } from "react-router-dom";
import { useUser } from "../context/user";

export const Proute = ({ reverse = false, ...props }) => {
  const { user } = useUser();
  return user.isLogged === !reverse ? (
    <Route {...props} />
  ) : (
    <Redirect to="/" />
  );
};
