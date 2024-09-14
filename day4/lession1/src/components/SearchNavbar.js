import React from 'react'
import AppContext from '../provider/Context'
import {useContext} from 'react'
import { Link } from 'react-router-dom';
function SearchNavbar() {
    const {subjects, searchNav, setSearchNav, studentsSubjetcs} = useContext(AppContext);
  return (
    <div>
        <h3>Subjects</h3>
        <ul style={{listStyle: 'none'}}>
        {
            subjects.map((sub, index) => (
                <li key={sub.id}><Link to={`/student?subject=${sub.subjectId}`}>{sub.name}</Link></li>
            ))
        }
        </ul>
    </div>
  )
}

export default SearchNavbar