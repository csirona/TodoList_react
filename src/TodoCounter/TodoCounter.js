import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext'

function TodoCounter() {

  const {totalTodos, completedTodo} = React.useContext(TodoContext);
  return <h2>Has completado {completedTodo} de {totalTodos} TODOs</h2>;
}

export { TodoCounter };
