import { useState } from "react";
import { useUser } from "../context/user";
import { Input } from "./Input";
import * as Button from "./Button";
import { formateDate } from "../helpers/formateDate";

export const Profile = () => {
  const { user, updateNote, deleteAccount } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileUpdate = async ev => {
    ev.preventDefault();
    const newNote = ev.target.elements.note.value;
    setIsLoading(true);
    await updateNote(newNote);
    setIsLoading(false);
  };

  return (
    <>
      <h1>
        <Button.Back />
        <span>Profile</span>
        <div className="empty"></div>
      </h1>
      <p className="profile-name">{user.name}</p>
      <form onSubmit={handleProfileUpdate}>
        <Input label="Phone" value={user.phone} disabled />
        <Input label="DOB" value={formateDate(new Date(user.dob))} disabled />
        <Input label="College" value={user.college} disabled />
        <Input label="Address" value={user.address} disabled />
        <Input label="Identity" value={user.identity} disabled />
        <Input
          as="textarea"
          label="Note to myself"
          name="note"
          defaultValue={user.note}
        />
        <Button.Primary
          className="submit-btn"
          type="submit"
          disabled={isLoading}>
          Update note
        </Button.Primary>
        <Button.Secondary onClick={deleteAccount}>
          Delete Account
        </Button.Secondary>
      </form>
    </>
  );
};
