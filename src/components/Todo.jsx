import React from 'react';
import './List.css';

const Todo = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">Todo</div>
        {props.todo.map((el) =>
            <p>{el}</p>
        )}
        </div>
        </>        
    );
}
 
export default Todo;