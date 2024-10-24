import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>Borrar</button>
    </li>
  );
}

export default TodoItem;
