import React from 'react';
import './List.css';
import FormOverlay from './FormOverlay';

const Todo = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">Todo</div>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            colName="todo"
        />
        {props.todo.map((el) =>
        <>
            <p>{el}</p>
            <button 
                
                onClick={()=> props.handleDeleteCard(el, "todo")
                }
                
                >Delete</button>
        </>
        )}
        </div>
        </>        
    );
}
 
export default Todo;