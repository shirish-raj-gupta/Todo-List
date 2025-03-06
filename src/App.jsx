import AppName from './components/AppName';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

function App() {

  const todoItems = [{
    name: "Buy Milk",
    duedate : "04/12/2025",
  },
  {
    name: "go to college",
    duedate : "04/12/2025",
  },
]
  return (
  <center className='todo-container'>
    <AppName/>
      <AddTodo/>
      <TodoItems todoItems={todoItems}></TodoItems>
      
  </center>
);
}

export default App
