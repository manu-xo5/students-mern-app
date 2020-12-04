import useFetch from '../hooks/useFetch';
import formateDate from '../helpers/formateDate';

const fetchStudents = async () => {
  const res = await fetch('/students');
  const { students } = await res.json();
  return students;
};

const Students = () => {
  const { data: students, status } = useFetch({
    query: fetchStudents,
  });
  console.log(status, students);

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  } else if (status === 'error') {
    return <h2>Error :(</h2>;
  } else if (status === 'success' && students.length > 0) {
    return (
      <div className='students-list'>
        {students.map(student => (
          <div key={student._id} className='card'>
            <p className='card-title__main'>{student.name}</p>
            <p className='card-title__sec'>{student.college}</p>
            <span>{formateDate(new Date(student.dob))}</span>
            <span className='chip'>{student.identity}</span>
          </div>
        ))}
      </div>
    );
  } else {
    return <h2>No Student exists yet</h2>;
  }
};

export default Students;
