import React from 'react'
import ChildrenParet from './ChildrenParet';

function Parent( {data} ) {
    const {count, handleIncrease, handleDecrease} = data;
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
      <ChildrenParet/>
    </div>
  )
}

export default Parent