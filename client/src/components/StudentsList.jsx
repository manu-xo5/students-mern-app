import * as React from "react";
import { formateDate } from "../helpers/formateDate";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { Api } from "../helpers/api";
import { pull } from "../helpers/utils";

export const StudentsList = () => {
  const { data: students } = useQuery(
    ["students"],
    () => Api.getStudents().then(pull("students")),
    []
  );
  const history = useHistory();

  return (
    <div className="students-list">
      {students?.length > 0 ? (
        students.map(student => (
          <div
            key={student._id}
            className="card click"
            onClick={() => history.push("/students", student)}>
            <img
              className="card-display-pic"
              src={Api.getDisplayPic(student._id) || "#"}
              alt="student's display pic"
            />
            <div className="card-cont">
              <p className="card-title card-title--main">{student.name}</p>
              <p className="card-title card-title--sec">
                {student.college || " ~ "}
              </p>
              <span className="chip">{student.identity}</span>
            </div>
          </div>
        ))
      ) : (
        <h2>No Students Yet :|</h2>
      )}
    </div>
  );
};
