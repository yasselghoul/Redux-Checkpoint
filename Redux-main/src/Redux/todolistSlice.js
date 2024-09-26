import { createSlice } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid';


const todolistSlice = createSlice({
    name:"todo",
    initialState:[
        {
            id:uuidv4(),text:"9Adhyea tunis", isDone:false
        },
        {
            id:uuidv4(),text:"9raya", isDone:false
        },  {
            id:uuidv4(),text:"9ahwa", isDone:false
        }
    ],
    reducers:{

addTodo:(state,action)=>{
const newtodo={
    id:uuidv4(),
text:action.payload,
    isDone:false
}
state.push(newtodo)
},
deleteTodo:(state,action)=>{
  state = state.filter((el)=> el.id !== action.payload)
},toggelTodo:(state,action)=>{
const task = state.find((el)=> el.id === action.payload)
task.isDone = !task.isDone
}


    }
})

export const {addTodo,deleteTodo,toggelTodo} = todolistSlice.actions
export default todolistSlice.reducer