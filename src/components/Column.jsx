import React, { useState, Component } from 'react';
import './List.css';
import FormOverlay from './FormOverlay';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Column = (props) => {    

    const [newColName, setNewColName] = useState(props.colName)
    const [showForm, setShowForm] = useState(false)


    const handleSetNewColName = (e) => {
        e.preventDefault();
        setShowForm(false);
        props.handleUpdateColName(props.colName, newColName);
    }

    const handleShowForm = () => {
        setShowForm(true)
    }

    return (
        <>
        <Draggable draggableId={props.colName} index={props.idx}>
            {(provided) => (
                <div 
                    className="container-list" 
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    {showForm ?
                    <form onSubmit={handleSetNewColName} hidden={!showForm} {...provided.dragHandleProps}>
                        <input 
                            className="header"
                            placeholder={props.colName}
                            onChange={e => setNewColName(e.target.value)}
                        />
                    </form>
                    :
                    <div className="header"
                        id="column-title"
                        onClick={handleShowForm}
                        {...provided.dragHandleProps}
                    >
                        {props.colName}
                        <button onClick={() => props.handleDeleteCol(props.colName)} ><i className="trash fitted small icon"></i></button>
                    </div> }
                    <FormOverlay 
                        handleAddCard={props.handleAddCard}
                        colName={props.colName}
                    />
                    <Droppable droppableId={props.colName} type="task">
                        {provided => (
                            <div
                                className="droppable"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {props.tasks.map((el, idx) =>
                                <div>
                                    <Task 
                                        key={`${el.title}${idx}`}
                                        title={el.title}
                                        description={el.description}
                                        task={el}
                                        idx={idx}
                                        handleDeleteCard={props.handleDeleteCard}
                                        colName={props.colName}
                                    />
                                </div>
                            )}
                            {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
        </>  
    );
}
 
export default Column;
