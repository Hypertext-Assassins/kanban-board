import React from 'react';
import './List.css';

const Done = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">Done</div>
        {props.done.map((el) =>
            <p>{el}</p>
        )}
        </div>
        </>  
    );
}
 
export default Done;