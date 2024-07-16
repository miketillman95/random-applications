import React from "react";
import { useState } from "react";


function Form({addTask}) {
	const [ name, setName] = useState('');


	const handleSubmit = (e) => {
		if(!name.trim()){
			alert('must enter a value')
		} else{
			e.preventDefault();
			addTask(name)
			setName('')
		}
	}

	const handleChange = (e) => {
		setName(e.target.value)
	}

	return (
		<form on onSubmit={handleSubmit}>
		<h2 className="label-wrapper">
			<label htmlFor="new-todo-input" className="label__lg">
			What needs to be done?
			</label>
		</h2>
		<input
			type="text"
			id="new-todo-input"
			className="input input__lg"
			name="text"
			autoComplete="off"
			value={name}
			onChange={handleChange}
			placeholder="enter a task"

		/>
		<button type="submit" className="btn btn__primary btn__lg">
			Add
		</button>
		</form>
	);
	}
  export default Form;


  
  
  
  