import React from 'react';
import './List.css';
import FormOverlay from './FormOverlay';

const Done = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">Done</div>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            colName="done"
        />
        {props.done.map((el) =>
        <>
            <p>{el}</p>
            
            <button  onClick={()=> props.handleDeleteCard(el, "done")}>Delete</button>
            
        </>
        )}
        </div>
        </>  
    );
}
 
export default Done;