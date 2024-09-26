import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import { addTodo } from '../Redux/todolistSlice'
const TodoAdd = () => {
  const [input,setInput]=useState('')
  const dispatch = useDispatch()
  const handelAdd=()=>{
    dispatch(addTodo(input))
    console.log(input)
    setInput('')
    console.log(input)

  }
  return (
    <div>
      <input placeholder='put a todo' 
      onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={()=> handelAdd()}  >submit</button>
    </div>
  )
}

export default TodoAdd