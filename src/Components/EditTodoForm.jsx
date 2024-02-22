import React, { useState } from 'react'

const EditTodoForm = (props) => {
  const [value,setValue] = useState(props.data.task);
   const handleChange = (event)=>{
    // console.log(event.target.value)
      setValue(event.target.value);
      
   }
   const handleSubmit = (event)=>{
    event.preventDefault();
    props.editTodo(value,props.data.id);
    setValue('');
   }
  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input name='input'
          type="text"
          className="todo-input"
          placeholder="Update Task"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </form>
    </>
  );
}

export default EditTodoForm