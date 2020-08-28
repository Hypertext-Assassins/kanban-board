import React from 'react';
import './List.css';

const InProgress = (props) => {
    return (
        <>
        <div className="container-list">
        <div className="header">InProgress</div>
        {props.inProgress.map((el) =>
            <p>{el}</p>
        )}
        </div>
        </>  
    );
}
 
export default InProgress;