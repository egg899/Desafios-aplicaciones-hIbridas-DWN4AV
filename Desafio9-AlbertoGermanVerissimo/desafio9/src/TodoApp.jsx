import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TodoList from './TodoList'

function TodoApp() {
  return (
    <div>
        <Header title="Titulo de encabezado"/>
          <TodoList/>
        <Footer title="Titulo de pie de pagina"/>

    </div>
  )
}

export default TodoApp