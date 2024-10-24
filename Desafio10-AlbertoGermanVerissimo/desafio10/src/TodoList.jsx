import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (  
    <div>

    
        <ul>
          
            {todos.map((todo, index) => (
              <TodoItem
              key={index}
              index={index}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              />
            ))}
        </ul>



    </div>
  )
}

export default TodoList