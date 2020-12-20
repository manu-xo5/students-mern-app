import { useState } from "react";
import { useUser } from "../context/user";
import { Input } from "./Input";
import * as Button from "./Button";
import { formateDate } from "../helpers/formateDate";
import { Api } from "../helpers/api";

import { ReactComponent as CameraSvg } from "../assets/camera.svg";

export const Profile = () => {
  const { user, updateNote, updateDisplayPic, deleteAccount } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileUpdate = async ev => {
    ev.preventDefault();
    const newNote = ev.target.elements.note.value;
    const displayPic = ev.target.elements.displayPic.files.item(0);
    console.log(displayPic);
    setIsLoading(true);
    await updateNote(newNote);
    await updateDisplayPic(displayPic);
    setIsLoading(false);
  };

  return (
    <>
      <h1>
        <Button.Back />
        <span>Profile</span>
        <div className="empty"></div>
      </h1>
      <form onSubmit={handleProfileUpdate}>
        <div className="profile-image-cont">
          <img
            src={Api.getDisplayPic(user._id) || "#"}
            alt="user's profile pic"
            className="profile-image"
          />
          <label className="profile-image-btn">
            <CameraSvg className="profile-image-btn__svg" />
            <input
              className="profile-image__input"
              name="displayPic"
              type="file"
              accept="image/apng,image/jpeg"
            />
          </label>
        </div>
        <p className="profile-name">{user.name}</p>
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
