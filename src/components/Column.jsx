import React, { useState } from 'react';
import './List.css';
import FormOverlay from './FormOverlay';

const Column = (props) => {

    const [showDesc, setShowDesc] = useState(false);

    const handleClick = () => {
        if (showDesc) setShowDesc(false)
        else setShowDesc(true)
    }

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
            <p className="todo">{el.title}</p>
            {(showDesc) ?
            <>
            <p>{el.description}</p>
                <button
                    onClick={handleClick}
                >Hide Task Details</button>
            </>
                :
                <button
                    onClick={handleClick}
                >Show Task Details</button>
            }
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