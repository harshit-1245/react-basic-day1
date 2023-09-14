// src/TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo__list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} text={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
