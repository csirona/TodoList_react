import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch.js';
import { TodoList } from '../TodoList/TodoList.js';
import { TodoItem } from '../TodoItem/TodoItem.js';
import { TodoForm } from '../TodoForm/TodoForm.js';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton.js';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal'
import { EmptyTodos } from '../EmptyTodos/EmptyTodos'
import { TodosLoading } from '../TodosLoading/TodosLoading'
import { TodosError } from '../TodosError/TodosError'

function AppUI() {

    const {
      error,
      loading,
      searchedTodos,
      completeTodos,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>

        {error && <TodosError />}
        {loading && <TodosLoading />}
        {( !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed = {todo.completed}
          onComplete={() => completeTodos(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

        {!!openModal && (
          <Modal>
              <TodoForm></TodoForm>
              </Modal>
        )}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
    );
}

export { AppUI };