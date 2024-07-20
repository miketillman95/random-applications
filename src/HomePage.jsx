import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const HomePage = () => {
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
    <>
        <h1 className="todo-title"> check out out the todo app</h1>
        <div className="product-link">
            <Link to='/todoApp'> Todo app</Link>
        </div>
        <br/>
        <div className="state-counter">
            <h1> Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}> increase</button><br/>
            <button onClick={() => handleDecrement()}> Decrease </button><br/>
            <button onClick={() => setCount(0)}> Reset</button>
        </div>
        <br/>
        
        
    </>

    )

}

export default HomePage