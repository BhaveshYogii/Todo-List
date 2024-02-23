import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const getItem = ()=>{
  const list = JSON.parse(localStorage.getItem('list'));
  if(list){
    return list;
  }
  return [];
}

const TodoWrapper = () => {
  const [todos,setTodos] = useState(getItem())
  const addToDo = (todo)=>{
    // console.log(todo);
    setTodos([...todos, {id: uuidv4(),task:todo,completed:false,isEditing:false}])
    

    // console.log(todos);
  }

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('list'));
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  useEffect(() => {
   localStorage.setItem('list',JSON.stringify(todos));
   
  }, [todos]);

  const toggleCompleted = (id)=>{
    setTodos(todos.map(todo => todo.id===id ? {...todo,completed : !todo.completed} : todo))
  }
  const deleteTodo = (id)=>{
    setTodos(todos.filter(todo=>todo.id !==id ))
  }

  const editTodo= (id) =>{
    setTodos(todos.map(todo => todo.id===id ? {...todo,isEditing:!todo.isEditing} : todo)) 
  }
  const editTask=(task,id)=>{
      setTodos(todos.map(todo=>todo.id===id ? {...todo,task:task,isEditing:!todo.isEditing} : todo))
  }
  return (
    <div  className='TodoWrapper '> 
    <h1>Get things Done...!</h1>
      <TodoForm addToDo={addToDo}/>
      {
        todos.map((data,index)=>(        
          data.isEditing ? (
            <EditTodoForm editTodo={editTask} data={data} key={index}/>
          ) : (
            <Todo data={data} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo}/>
          )
        ))
      }
    </div>
  )
}

export default TodoWrapper