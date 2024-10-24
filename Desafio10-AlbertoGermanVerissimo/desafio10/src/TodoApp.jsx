import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import TodoList from './TodoList'


function TodoApp() {
  const [ todos, setTodos ] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, {text, completed: false}]);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    console.log("newTodos",newTodos);
    console.log("todos",todos);
    setTodos(newTodos);
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="todo-app">
        <Header title="Lista de Tareas" addTodo ={addTodo}/>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        <Footer title="Titulo de pie de pagina" todos = {todos} />

    </div>
  )
}

export default TodoApp