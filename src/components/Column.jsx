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

    const [newColName, setNewColName] = useState("");

    const handleSetNewColName = (e) => {
        e.preventDefault();
        props.handleUpdateColName(props.colName, newColName);
    }

    return (
        <>
        <div className="container-list">
        <form onSubmit={handleSetNewColName}>
            <input 
                className="header"
                placeholder={props.colName}
                onChange={e => setNewColName(e.target.value)}
            />
        </form>

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