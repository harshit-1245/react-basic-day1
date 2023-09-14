// src/Todo.js
import React from 'react';

const Todo = ({ index, text, onDelete }) => {
  return (
    <div className="todo">
      <p>{text}</p>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
};

export default Todo;
