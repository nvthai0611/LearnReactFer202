import React, { useEffect, useState } from "react";
import AppContext from "./Context";
import axios from "axios";

function AppProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [stuDetail, setStuDetail] = useState([]);
  const [studentsSubjetcs, setStudentsSubjetcs] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchNav, setSearchNav] = useState([]);


  useEffect(() => {
    // cách 1
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((res) => setTodos(res));
    // Cách 2 dùng axios
    // async await
    const fetchData = async () => {
        // lấy data từ api có lúc sẽ xảy ra lỗi
        try {
            // get : lấy data về 
            const resStudent = await axios.get(`http://localhost:9999/students`);
            setStudents(resStudent.data);
            const resSubjects = await axios.get(`http://localhost:9999/subjects`);
            setSubjects(resSubjects.data);
            const resStuDetail = await axios.get(`http://localhost:9999/student_details`);
            setStuDetail(resStuDetail.data);
            const resStuSubject = await axios.get(`http://localhost:9999/students_subjetcs`);
            setStudentsSubjetcs(resStuSubject.data);
            console.log(studentsSubjetcs);
            
        } catch (error) {
            console.log(error); 
        }
    };
    fetchData();
  }, []);
  const data = {
    students, setStudents,subjects, setSubjects,stuDetail, searchName, setSearchName, searchNav, setSearchNav, studentsSubjetcs, setStudentsSubjetcs
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;
