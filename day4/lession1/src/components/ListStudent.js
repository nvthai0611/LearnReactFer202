import React from 'react'
import {useContext, useState, useEffect} from 'react'
import AppContext from '../provider/Context';
import {Link, useLocation} from 'react-router-dom'
function ListStudent() {
    const {students, stuDetail, searchName, searchNav, setSearchName, setSearchNav, studentsSubjetcs} = useContext(AppContext);
    const [filterNavbar, setFilterNavbar] = useState([]);
    const searchParrams = new URLSearchParams(useLocation().search);
    const subjectId = searchParrams.get('subject');
    // console.log(subjectId);
    useEffect(() => {
        const getStudentSubject = studentsSubjetcs
        .filter((stuSub) => stuSub.subjectId === subjectId)
        .map((stuSub) => stuSub.studentId);
        setFilterNavbar(getStudentSubject);
    }, [subjectId])
    const getDetail = (stuId) => {
       const studentMatch = stuDetail?.find((detail) => detail?.studentId == stuId);
       return studentMatch ? studentMatch : 'unknow';
    }
    const filterStudent = students.filter((stu) => {
        const nameMatch = stu.name.toLowerCase().includes(searchName.toLowerCase()) || searchName === '';
        const navMatch = filterNavbar?.includes(stu.studentId) || filterNavbar?.length === 0;
        return nameMatch && navMatch;
    });
    console.log(filterNavbar);
    const handleShowALl= () => {
        setSearchName('');
        setSearchNav([]);
    }
  return (
    <div className='col-md-9'>
        <h3>List Students</h3>
        <Link className='btn btn-primary' to={'/student'}>Show all</Link>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>StudentId</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>RegularStudent</th>
                    <th>View grades</th>
                </tr>
            </thead>
            <tbody>
                {
                    filterStudent.map((stu, index) => (
                        <tr key={index}>
                            <td>{stu.studentId}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{getDetail(stu.studentId)?.address?.street}</td>
                            <td>{getDetail(stu.studentId)?.address?.city}</td>
                            <td>{stu.isRegularStudent ? 'fulltime' : 'no fulltime'}</td>
                            <td><Link to={`/student/${stu.studentId}`}>Grades</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default ListStudent