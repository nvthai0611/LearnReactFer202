import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function DefaultLayout( {children} ) {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div>
            <Navbar/>
        </div>
        <div>
            {/* Nội dung thằng con */}
            {children}
            {/* <ListSanpham/> */}
        </div>
    </div>
  )
}

export default DefaultLayout