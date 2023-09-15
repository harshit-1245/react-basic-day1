import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  const addTodo=()=>{
    if(input.trim()!==' '){
      setTodos([...todos,input])
      setInput('');
    }
  }
 return(
  <div>
    <h1>Todo App</h1>
    <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task..."
        />
    <button onClick={addTodo}>Add</button>
    {todos.map((todos,index)=>(
      <li key={index}>{todos}</li>
      
    ))}
  </div>
 )
      
}

export default App;
