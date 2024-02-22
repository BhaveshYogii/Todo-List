import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({data,toggleCompleted,deleteTodo ,editTodo}) => {
  return (
    //  console.log(props.task);
   <>
   
    <div className='Todo'>
    <p onClick={()=> toggleCompleted(data.id)} className={`${data.completed ? "completed" : ""}`}> {data.task}</p>
    <div>
      <FontAwesomeIcon icon={faPenToSquare}  onClick={()=>{editTodo(data.id)}}/>
      <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(data.id)}/>
    </div>
    </div>
   </>
  )
}

export default Todo