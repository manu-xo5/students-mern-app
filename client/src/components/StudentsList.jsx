import formateDate from '../helpers/formateDate';
import { useHistory } from 'react-router-dom';

const Students = ({ students }) => {
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
