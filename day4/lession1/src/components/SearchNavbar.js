import React, { useState } from 'react'
import AppContext from '../provider/Context'
import {useContext} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
function SearchNavbar() {
    const {subjects, setSubjects} = useContext(AppContext);
    const [addSubjects, setAddSubjects] = useState({
      subjectId: '',
      name: ''
    })
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const resData = await axios.post(`http://localhost:9999/subjects`, addSubjects);
        setSubjects([...subjects, resData.data]);
        
      } catch (error) {
        
      }
      
    }
    const handleChang = (e) => {
        const {name, value} = e.target;
        setAddSubjects({...addSubjects, [name]: value})
        console.log(addSubjects);
    }
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
        <form onSubmit={handleSubmit}>
          SubId<input type='text' name="subjectId" value={addSubjects.subjectId} onChange={handleChang}/>
          name<input type='text' name='name' value={addSubjects.name} onChange={handleChang}/>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default SearchNavbar