import React, { useEffect, useState } from 'react'

const CounterComponent = () => {
    const[count, setCount] = useState(0);

    // run on every render
    useEffect(()=> {
        console.log("Count value is changed:",count)
    })

    const handleCount = () => {
        setCount(count => count+1);
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increment</button>
    </div>
  )
}

export default CounterComponent
