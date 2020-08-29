import React from 'react';
import './List.css';
import FormOverlay from './FormOverlay';

const Column = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">{props.name}</div>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            cardType={props.name}
        />
        {props.tasks.map((el) =>
            <div>
            <p className="todo">{el}</p>
            <button 
                className="ui black button"
                onClick={()=> props.handleDeleteCard(el, props.name)}>Delete</button>
            <button 
                className="ui blue button"
                onClick={() => props.handleUpdateCard(el, props.name)}>Update</button>
            </div>
        )}
        </div>
        </>  
    );
}
 
export default Column;