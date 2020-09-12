import React, {useState} from "react";
import TodoItem from "./components/TodoItem/ToDoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css"

function App() {

  // variables
  const [todos, setTodos] = useState([
    "Finish plus project",
    "Learn to breakdance",
    "Backflip",
  ]);

// methods

  const addTodo = (text) => {
    const newtodos = [...todos, text];
    setTodos(newtodos);
  }

// template
  return (
  <div className="app">
    <div className="todo-list">
      <div>
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} />
        ))} 
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  </div>
);
}

export default App;

// have items
// remove items
// add items

