import React, { useEffect, useState } from 'react';
import AppContext from './Context';
import axios from 'axios';


function AppProvider({ children }) {

    // khai báo và quản lí 1 đối tượng như này
    const [projects, setProjects] = useState([]);
    // const [departments, setDepartments] = useState([]);
    // const [employees, setEmployees] = useState([]);
    // const [filterDepart, setFilterDepart] = useState(null);
    // axios luôn đi cùng await => luôn đi cùng not bất đồng bộ (async)

    useEffect(() => {
        const fetData = async () => {
            try {
                // lấy dữ liệu ~~ dùng get
                // demo -> dùng cho mọi cái
                // const resProjects = await axios.get(`http://localhost:9999/projects`);

                // set dữ liệu vào 
                // demo -> dùng cho cái khác cũng như thế
                // setProjects(resProjects.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetData();
    }, []); // chạy đúng 1 lần thôi 

    const data = {
        // mặc định truyền cho con ở đây cứ thế áp dụng , 
        //sau khi lấy và set xong thì vất nó vào đây
        projects, setProjects
    };

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
