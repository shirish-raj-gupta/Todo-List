import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from './components/AppName'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'

function App() {
  return (
  <center className='todo-container'>
    <AppName/>
      <AddTodo/>
      <div className='item-container'>
      <TodoItem1  />
      <TodoItem2/>
      </div>
  </center>
);
}

export default App
