import React, { useState } from 'react';
import './List.css';
import FormOverlay from './FormOverlay';
import Task from './Task';

const Column = (props) => {

    // const [showDesc, setShowDesc] = useState(false);

    // const handleClick = () => {
    //     if (showDesc) setShowDesc(false)
    //     else setShowDesc(true)
    // }

    return (
        <>
        <div className="container-list">
        <div className="header">{props.name}</div>
        <button onClick={() => props.handleDeleteCol(props.name)} >Delete Column</button>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            cardType={props.name}
        />
        {props.tasks.map((el) =>
            <div>
            <Task 
                title={el.title}
                description={el.description}
                task={el}
                handleDeleteCard={props.handleDeleteCard}
                handleUpdateCard={props.handleUpdateCard}
                colName={props.name}
            />
            </div>
        )}
        </div>
        </>  
    );
}
 
export default Column;