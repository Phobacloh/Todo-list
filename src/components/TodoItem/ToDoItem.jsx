import React from "react"
import "./TodoItem.css"

function TodoItem(props) {
    const { todo, index, completeToDo, removeToDo } = props;
    return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
    { todo.text }
        <div>
            <button onClick={() => completeToDo(index)}>Complete</button>
            <button onClick={() => removeToDo(index)}>x</button>
        </div>
    </div>
    );
}

export default TodoItem