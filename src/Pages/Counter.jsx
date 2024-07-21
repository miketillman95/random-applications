import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


    const handleDecrement =() =>{
        if(count <= 0) {
            alert('Count cant go below 0')
            setCount(0)
    
        } else {
            setCount(count -1)
        }
    }

  return (
    <div className="state-counter">
    <h1> Counter</h1>
    <p>{count}</p>
    <ul>
    <button onClick={() => setCount(count + 1)}> increase</button><br/>
    <button onClick={() => handleDecrement()}> Decrease </button><br/>
    <button onClick={() => setCount(0)}> Reset</button>
    </ul>
</div>

  )
}

export default Counter

