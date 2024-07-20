import React from "react";
import { Link } from "react-router-dom";
import '../Css/TodoApp.css'
import Todo from '../components/Todo'
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import { useState } from "react";
import { nanoid } from 'nanoid'


function TodoApp({dataTasks}) {
    const [tasks, setTasks] = useState(dataTasks)
    const [filter, setFilter] = useState('All')

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task)=> {
            if(id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task
        })
        setTasks(updatedTasks)
        console.log(updatedTasks)
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

    const editTask = (id, newName) => {
        const editedTaskLiist = tasks.map((task) => {
            if( id ===task.id) {
                return {...task, name: newName};
            }

            return task
        })
        setTasks(editedTaskLiist)
    }

    const FILTER_MAP = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed
    }

    const FILTER_NAMES = Object.keys(FILTER_MAP);




    const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => ( <Todo id={task.id} name ={task.name} editTask={editTask}  completed = {task.completed} key={task.id}  toggleTaskCompleted={toggleTaskCompleted} deleteTask={deleteTask} />));
    console.log(filter)

    const filterList = FILTER_NAMES.map((name) => <FilterButton key= {name} name = {name} isPresssed={name ===filter} setFilter={setFilter}/>)

    



    const tasksNoun = taskList.length != 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`
    return (
        <div className="todoapp stack-large">
            <Link to='/'> Home </Link>
            <h1 hidden={true} >Todo Magic</h1>
                <Form addTask={addTask}/>
            <div className="filters btn-group stack-exception">
             {filterList}
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