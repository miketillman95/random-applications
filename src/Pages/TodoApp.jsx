import React from "react";
import { Link } from "react-router-dom";
import '../Css/Todo.css'
import Todo from '../components/Todo'
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";


function TodoApp({tasks}) {
    const taskList = tasks?.map((task) => <Todo id={task.id} name ={task.name}  completed = {task.completed} key={task.id} />);
    return (
        <div className="todoapp stack-large">
            <Link to='/'> Home </Link>
            <h1 hidden = {false}>Todo Magic</h1>
                <Form/>
            <div className="filters btn-group stack-exception">
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    );
}

export default TodoApp