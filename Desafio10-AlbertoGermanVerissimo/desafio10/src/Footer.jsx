import React from 'react';

function Footer({ title, todos }) {
  const cantidadTarea = todos.filter(todo => !todo.completed).length;
  const tareasNoCompletadas = todos.filter(todo => !todo.completed);

  return (
    <footer>
      <h4>{title}</h4>
      <p>Tareas Pendientes: {cantidadTarea}</p>
      
      {
        cantidadTarea > 0 ? (
          <>
            <p>Tareas:</p>
            {tareasNoCompletadas.map((todo, index) => (
              <p key={index}>{todo.text}</p>
            ))}
          </>
        ) : (
          <p>No hay tareas pendientes</p>
        )
      }
    </footer>
  );
}

export default Footer;
