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
        <div
            className="header"
            contentEditable={true}
            onClick={(e) => props.handleUpdateColName(props.colName, e.target.value)}
        >{props.colName}</div>
        <button className="ui button" onClick={() => props.handleDeleteCol(props.colName)} >Delete Column</button>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            colName={props.colName}
        />
        {props.tasks.map((el) =>
            <div>
            <Task 
                title={el.title}
                description={el.description}
                task={el}
                handleDeleteCard={props.handleDeleteCard}
                colName={props.colName}
            />
            </div>
        )}
        </div>
        </>  
    );
}
 
export default Column;