import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const HomePage = () => {
const [count, setCount] = useState(10)
const [number, setNumber] = useState()

    return (
    <>
        <h1>check out our products</h1>
        <div className="product-link">
            <Link to='/productlist'> Product List</Link>
        </div>
        <div className="state-counter">
            <h1> Counter</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}> increase</button>
            <button onClick={() => setCount(count -1)}> Decrease </button>
            <button onClick={() => setCount(0)}> Reset</button>
        </div>
        <br/>
        
        
    </>

    )

}

export default HomePage