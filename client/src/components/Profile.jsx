import { useState } from "react";
import { useUser } from "../context/user";
import Input from "./Input";

const Profile = () => {
  const { user, updateNote, logout } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileUpdate = async (ev) => {
    ev.preventDefault();
    const newNote = ev.target.elements.note.value;
    setIsLoading(true);
    await updateNote(newNote);
    setIsLoading(false);
  };

  return (
    <>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <div className="paper">
        <form onSubmit={handleProfileUpdate}>
          <Input label="Phone" value={user.phone} disabled />
          <Input label="DOB" value={user.dob} disabled />
          <Input label="College" value={user.college} disabled />
          <Input label="Address" value={user.address} disabled />
          <Input label="Identity" value={user.identity} disabled />
          <Input
            as="textarea"
            label="Note to myself"
            name="note"
            defaultValue={user.note}
          />
          <button className="submit-btn" type="submit" disabled={isLoading}>
            Update note
          </button>
        </form>
      </div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Profile;
