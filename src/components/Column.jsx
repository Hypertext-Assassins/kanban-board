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
            <p>{el}</p>
        )}
        </div>
        </>  
    );
}
 
export default Column;