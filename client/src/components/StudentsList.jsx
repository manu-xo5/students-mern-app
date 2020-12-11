import * as React from 'react';
import formateDate from '../helpers/formateDate';
import { useHistory } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import Api from '../helpers/api';
import { pull } from '../helpers/utils';

const Students = () => {
  const [c, s] = React.useReducer(c => ++c, 0);
  const { data: students } = useQuery(
    ['students'],
    () => Api.getStudents().then(pull('students')),
    []
  );
  const history = useHistory();

  return (
    <div className='students-list'>
      {students?.length > 0 ? (
        students.map(student => (
          <div
            key={student._id}
            className='card click'
            onClick={() => history.push('/students', student)}
          >
            <p className='card-title__main'>{student.name}</p>
            <p className='card-title__sec'>{student.college || ' ~ '}</p>
            <span>{formateDate(new Date(student.dob))}</span>
            <span className='chip'>{student.identity}</span>
          </div>
        ))
      ) : (
        <h2>No Students Yet :|</h2>
      )}
    </div>
  );
};

export default Students;
