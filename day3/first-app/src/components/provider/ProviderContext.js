import React, { createContext, useEffect, useState } from 'react'
import MyContext from './Context';

function ProviderContext( {children} ) { // APpp
    const [count, setCount] = useState(0);
    const [filterCheck, setFilterCheck] = useState("Hải đẹp trai");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setProducts(json));   
        console.log("hello ae");
    }, []);
    const data = {
        count, setCount,filterCheck, setFilterCheck,products, setProducts
    }
  return (
    <MyContext.Provider value={data}>
        {children}
        {/* App */}
    </MyContext.Provider>
  )
}

export default ProviderContext