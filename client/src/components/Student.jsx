import { Input } from "./Input";
import { capitalize } from "../helpers/capitalize";
import { Back } from "./Button";
import { Redirect } from "react-router-dom";

import { formateDate } from "../helpers/formateDate";
import { Api } from "../helpers/api";

export const Student = ({ location, history }) => {
  const user = location.state;
  return typeof user !== "object" ? (
    <Redirect to="/" />
  ) : (
    <>
      <h1>
        <Back />
        <span>Student</span>
        <div className="empty"></div>
      </h1>
      <img
        className="profile-image"
        src={user._id ? Api.getDisplayPic(user._id) : "#"}
        alt="student's display pic"
      />
      <p className="profile-name">{capitalize(user.name)}'s profile</p>
      <div>
        <Input label="Phone" value={user.phone || " ~ "} disabled />
        <Input label="DOB" value={formateDate(user.dob) || " ~ "} disabled />
        <Input label="College" value={user.college || " ~ "} disabled />
        <Input label="Address" value={user.address || " ~ "} disabled />
        <Input label="Identity" value={user.identity} disabled />
        <Input
          as="textarea"
          label={`Note to ${user.name}`}
          value={user.note || " ~ "}
          disabled
        />
      </div>
    </>
  );
};
