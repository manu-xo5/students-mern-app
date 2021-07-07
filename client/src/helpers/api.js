import { query, api_prefix } from "../helpers/query";
import { mult } from "../helpers/utils";

export const Api = {
  me: (token) =>
    query("/me", {
      method: "get",
      headers: {
        authorization: token,
      },
    }),
  getStudents: () => query("/students"),
  getDisplayPic: (studentId) => `${api_prefix}/img/${studentId}`,
  login: ({ name, password }) =>
    query("/auth", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }),
  signup: ({ name, password, phone, dob, college, address, identity, note }) =>
    query("/students", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        phone,
        dob,
        college,
        address,
        identity,
        note,
      }),
    }),
  updateProfile: ({ token, note }) =>
    query("/me", {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        note,
      }),
    }),
  deleteProfile: (token) =>
    query(`/students`, {
      method: "delete",
      headers: {
        authorization: token,
      },
    }),
  updateDisplayPic: ({ img, token }) =>
    query("/img", {
      method: "post",
      headers: {
        authorization: token,
      },
      body: mult(["displayPic", img]),
    }),
};
