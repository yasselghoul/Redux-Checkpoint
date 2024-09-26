import React from 'react'
import TodoElement from './TodoElement'
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todo = useSelector(state=> state.todo)
  console.log('toto list',todo)
  return (
    <div>
      {
        todo.map((el)=>     <TodoElement  el={el} />)
      }
 
    </div>
  )
}

export default TodoList