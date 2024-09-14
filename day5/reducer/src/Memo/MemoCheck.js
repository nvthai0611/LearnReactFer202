import React, { useMemo, useState } from 'react'
// Memoization là quá trình lưu trữ kết quả của các phép tính để sử dụng lại sau đó
function expensiveCalculation(num) {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    console.log("Calculate done");
    return num;
}
function MemoCheck() {
    const [count, setCount] = useState(0);
    // const number = expensiveCalculation(1);
    // const [check, setCheck] = useState(0);
    const number = useMemo(() => expensiveCalculation(1), []);
    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>Number: {number}</h1>
    </div>
  )
}

export default MemoCheck