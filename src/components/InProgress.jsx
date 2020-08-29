import React from 'react';
import './List.css';
import FormOverlay from './FormOverlay';

const InProgress = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">InProgress</div>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            colName="inProgress"
        />
        {props.inProgress.map((el) =>
        <>
            <p>{el}</p>
            <button onClick={()=> props.handleDeleteCard(el, "inProgress")}>Delete</button>
        </>
        )}
        </div>
        </>  
    );
}
 
export default InProgress;