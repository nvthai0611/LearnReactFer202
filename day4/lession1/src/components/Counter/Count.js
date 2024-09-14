import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(60);
    let timeOutId;
    const handleStart = () => {
        timeOutId = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
        console.log(timeOutId);
        
    };
    const handleStop = () => {

    };
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Count