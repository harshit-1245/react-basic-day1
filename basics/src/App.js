// src/App.js
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="todo__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
