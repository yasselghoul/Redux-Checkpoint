import React from 'react'
import {deleteTodo,toggelTodo} from '../Redux/todolistSlice'
import { useDispatch } from 'react-redux'
const TodoElement = ({el}) => {

  const dispatch = useDispatch()


  return (
    <div>
      <li>
        {el.text}
        <button onClick={()=>dispatch(toggelTodo(el.id))}    >done ?</button>
        <button onClick={()=>dispatch(deleteTodo(el.id))}   >remove</button>
      </li>
    </div>
  )
}

export default TodoElement