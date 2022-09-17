import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//Crear contexto
const TodoContext = React.createContext();

function TodoProvider(props){
    const{
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1',[])
    const [valor,setValor] = React.useState('');
    const [openModal,setOpenModal] = React.useState(false);
    const completedTodo = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
  
    let searchedTodos =[];
  
    if (!valor.length >= 1){
      searchedTodos= todos;
    } else{
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = valor.toLowerCase();
        return todoText.includes(searchText);             
      });
      
    }
  
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed:false,
            text:text
        })
        saveTodos(newTodos)
    }
  
  
    const completeTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);   
      const newTodos =[...todos];
      newTodos[todoIndex].completed =true
      saveTodos(newTodos)
    }
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos =[...todos];
      newTodos.splice(todoIndex,1)
      saveTodos(newTodos)
    }

    return(
        <TodoContext.Provider value={{
            loading,
        error,
        totalTodos,
        completedTodo,
        valor,
        setValor,
        searchedTodos,
        completeTodos,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        }}>
            {props.children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }