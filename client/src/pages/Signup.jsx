import { useState } from "react";
import { useUser } from "../context/user";
import { Input } from "../components/Input";
import * as Button from "../components/Button";

export const Signup = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useUser();

  const handleRegister = async (ev) => {
    ev.preventDefault();
    const { name, password, phone, dob, college, address, identity, note } =
      ev.target.elements;
    setIsLoading(false);
    await signup({
      name: name.value,
      password: password.value,
      phone: phone.value,
      dob: dob.value,
      college: college.value,
      address: address.value,
      identity: identity.value,
      note: note.value,
    });
    setIsLoading(false);
  };

  return (
    <>
      <h1>
        <Button.Back />
        <span>Sign Up</span>
        <div className="empty"></div>
      </h1>
      <form onSubmit={handleRegister}>
        <Input label="Name *" name="name" />
        <Input label="Password *" name="password" type="password" />
        <Input label="Phone" name="phone" type="tel" inputMode="tel" />
        <Input label="Dob" name="dob" type="date" />
        <Input label="College" name="college" />
        <Input label="Address" name="address" />
        <Input as="select" label="Identity *" name="identity">
          <option value="AMERICAN">America</option>
          <option value="ASIAN">Asian</option>
        </Input>
        <Input as="textarea" label="Note to yourself (BIO)" name="note" />
        <Button.Primary type="submit" disabled={isLoading}>
          Register
        </Button.Primary>
        <Button.Secondary onClick={() => history.push("/login")}>
          Already have account?
        </Button.Secondary>
      </form>
    </>
  );
};
