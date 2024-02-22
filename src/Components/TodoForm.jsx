import React, { useState } from 'react'

const TodoForm = (props) => {
  const [value,setValue] = useState('');
   const handleChange = (event)=>{
    // console.log(event.target.value)
      setValue(event.target.value);
      
   }
   const handleSubmit = (event)=>{
    event.preventDefault();
    // console.log(value);
    props.addToDo(value);
    setValue('');
   }
  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input name='input'
          type="text"
          className="todo-input"
          placeholder="What is the task today?"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </>
  );
}

export default TodoForm