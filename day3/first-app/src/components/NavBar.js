import React, { Fragment, useContext } from 'react'
import MyContext from './provider/Context';

function NavBar( {hello} ) {
  const {count, setCount, filterCheck, setFilterCheck} = useContext(MyContext);
  return (
      <Fragment>
      <div><h1>navbar có count: {count}</h1></div>
      <div>{filterCheck}</div>
      <div>{hello}</div>
      </Fragment>
      
  )
}

export default NavBar