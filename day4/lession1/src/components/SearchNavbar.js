import React from 'react'
import AppContext from '../provider/Context'
import {useContext} from 'react'
function SearchNavbar() {
    const {subjects, searchNav, setSearchNav, studentsSubjetcs} = useContext(AppContext);
    const handleSearchNav = (subId) => {
        const getStudentSubject = studentsSubjetcs.filter(stuSub => stuSub.subjectId == subId);
        const getAllIdStudent = getStudentSubject.map(stu => stu.studentId);
        setSearchNav(getAllIdStudent.length > 0 ? getAllIdStudent : [false]);
    };
    console.log(searchNav);
    
  return (
    <div>
        <h3>Subjects</h3>
        <ul style={{listStyle: 'none'}}>
        {
            subjects.map((sub, index) => (
                <li key={sub.id}><p onClick={() => handleSearchNav(sub.subjectId)}>{sub.name}</p></li>
            ))
        }
        </ul>
    </div>
  )
}

export default SearchNavbar