import React from 'react'

function Header() {
    // chỉ được khai báo hook ở đây
  const handleChange = () => {
        // không được khai báo hook
  }
  return (
    <div className=''>
        <h1>Đây là header</h1>
    </div>
  )
}

export default Header