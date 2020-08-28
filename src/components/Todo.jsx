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
            cardType="todo"
        />
        {props.todo.map((el) =>
            <p>{el}</p>
        )}
        </div>
        </>        
    );
}
 
export default Todo;