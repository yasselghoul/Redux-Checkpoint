import React from 'react'
import TodoList from './component/TodoList'
import TodoAdd from './component/TodoAdd'
import './App.css';

function App() {
  return (
    <div>
      <TodoAdd/>
      <TodoList/>
    </div>
  );
}

export default App;
