import { TodoContext } from '../TodoContext/TodoContext'
import './TodoForm.css'
import React from 'react';


function TodoForm() {
    const [newTodoValue,setNewTodoValue]=React.useState('');
    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext)

    const onSubmit=(event)=> {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    }

    const onChange=(event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel=()=>{
        setOpenModal(false);
    }
    return(
        
<form onSubmit={onSubmit}>
    <label>Escribe tu nuevo To Do</label>
    <textarea value={newTodoValue}
    onChange={onChange}
    placeholder='Escribe una nueva tarea'/>

    
    <div className='TodoForm-buttonContainer'>
        <button type='button' className='TodoForm-button TodoForm-button-cancel'
        onClick={onCancel}>
            Cancel
        </button>
        <button className='TodoForm-button TodoForm-button-add' type='submit'>
            Agregar
        </button>
    </div>
</form>
    )
}

export {TodoForm}