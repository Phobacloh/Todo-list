import React, {useState} from "react";
import TodoItem from "./components/TodoItem/ToDoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css"

function App() {

  // variables
  const [todos, setTodos] = useState([
    {text:"Finish plus project", isCompleted: false},
    {text:"Learn to breakdance", isCompleted: false},
    {text:"Backflip", isCompleted: false},
  ]);

// methods

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true
    setTodos(newTodos);
  }

  const removeToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}
// template
  return (
  <div className="app">
    <div className="todo-list">
      <div>
        <h1>My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} 
          key={index} 
          index={index} 
          completeToDo={completeToDo}
          removeToDo={removeToDo} 
          />
        ))} 
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  </div>
);
        }

export default App