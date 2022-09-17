import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext'



function TodoSearch(){
  const {valor, setValor} = React.useContext(TodoContext);

  const onSearchValueChange =(event)=>{
    console.log(event.target.value);
    setValor(event.target.value); 
  };
  
  return[
    <input className='TodoSearch' 
    placeholder="Searchhh" 
    value={valor}
    onChange={onSearchValueChange}
    />,
  ]
}

export { TodoSearch };