import React from 'react'
import {useContext} from 'react'
import AppContext from '../provider/Context';
function ListStudent() {
    const {students, stuDetail, searchName, searchNav, setSearchName, setSearchNav} = useContext(AppContext);
    
    const getDetail = (stuId) => {
       const studentMatch = stuDetail?.find((detail) => detail?.studentId == stuId);
       return studentMatch ? studentMatch : 'unknow';
    }
    const filterStudent = students.filter((stu) => {
        const nameMatch = stu.name.toLowerCase().includes(searchName.toLowerCase()) || searchName === '';
        const navMatch = searchNav?.includes(stu.studentId) || searchNav?.length === 0;
        return nameMatch && navMatch;
    });
    const handleShowALl= () => {
        setSearchName('');
        setSearchNav([]);
    }
  return (
    <div>
        <h3>List Students</h3>
        <button className='btn btn-primary' onClick={handleShowALl}>Show all</button>
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
                            <td><a href=''>Grades</a></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default ListStudent