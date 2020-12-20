import { Input } from "../Input";
import { useUser } from "../../context/user";
import * as Button from "../Button";
import "./styles.css";

export const Login = ({ history }) => {
  const { login } = useUser();

  const handleLogin = async ev => {
    ev.preventDefault();
    const { name, password } = ev.target.elements;
    login({
      name: name.value,
      password: password.value,
    });
    ev.target.reset();
  };

  return (
    <>
      <h1>
        <Button.Back />
        <span>Login</span>
        <div className="empty"></div>
      </h1>
      <form className="login-form" onSubmit={handleLogin}>
        <Input label="Name" name="name" required />
        <Input label="Password" name="password" type="password" required />
        <Button.Primary type="submit">Login</Button.Primary>
        <Button.Secondary onClick={() => history.push("/signup")}>
          Or Register
        </Button.Secondary>
      </form>
    </>
  );
};
