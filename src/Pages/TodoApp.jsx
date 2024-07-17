import React from "react";
import { Link } from "react-router-dom";
import '../Css/Todo.css'
import Todo from '../components/Todo'
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import { useState } from "react";
import { nanoid } from 'nanoid'


function TodoApp({dataTasks}) {
    const [tasks, setTasks] = useState(dataTasks)

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task)=> {
            if(id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter((task) => id !== task.id)
        console.log(id)
        setTasks(remainingTasks)
    }
    const addTask = (name) => {
       const newTask = { id: `todo-${nanoid()}`, name, completed: false};
       setTasks([...tasks, newTask]);
    }

    const taskList = tasks?.map((task) => <Todo id={task.id} name ={task.name}  completed = {task.completed} key={task.id}  toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} />);

    



    const tasksNoun = taskList.length != 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`
    return (
        <div className="todoapp stack-large">
            <Link to='/'> Home </Link>
            <h1 hidden={true} >Todo Magic</h1>
                <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
            <h2 id="list-heading">{headingText}</h2>
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