import React, { useState } from 'react'

function Header({title, addTodo}) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(inputValue.trim()){
      addTodo(inputValue);
      setInputValue("");
    }
    console.log("Submiting input value: " + inputValue);
    
  }


  return (
    <header>
        <h4>{title}</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Adhiere una nueva tarea"
          />
          
         <button type="submit">Adherir</button>
        </form>
    </header>
  )
}

export default Header