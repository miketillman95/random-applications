import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Css/HomePage.css'


const HomePage = () => {



    return (
    <>
        <h1 className="todo-title"> I am just making random react pages here for practice</h1>
        <div className="product-link">
            <Link to='/todoApp'> Todo app</Link> <br/>
            <Link to='/counter'>Counter</Link>
        </div>
        
        
    </>

    )

}

export default HomePage