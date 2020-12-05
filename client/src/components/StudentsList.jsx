import formateDate from "../helpers/formateDate";
import { useEffect, useState } from "react";
import Api from "../helpers/api";
import { useHistory } from "react-router-dom";

const Students = () => {
  const [status, setStatus] = useState("loading");
  const [students, setStudents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const _main = async () => {
      setStatus("loading");
      const { students, error } = await Api.getStudents();
      if (error) {
        setStatus("error");
        alert(error);
      } else {
        setStudents(students);
        setStatus("success");
      }
    };
    _main();
    return () => Promise.reject(_main);
  }, []);

  if (status === "success" && students.length > 0) {
    return (
      <div className="students-list">
        {students.map((student) => (
          <div
            key={student._id}
            className="card click"
            onClick={() => history.push("/students", student)}
          >
            <p className="card-title__main">{student.name}</p>
            <p className="card-title__sec">{student.college}</p>
            <span>{formateDate(new Date(student.dob))}</span>
            <span className="chip">{student.identity}</span>
          </div>
        ))}
      </div>
    );
  } else if (status === "error") {
    return (
      <h2>
        Fatality :( <br /> Code
      </h2>
    );
  } else {
    return <h2>No Student exists yet</h2>;
  }
};

export default Students;
