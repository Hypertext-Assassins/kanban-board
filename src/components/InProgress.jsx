import React from 'react';

const InProgress = (props) => {
    return (
        <>
        <div>InProgress</div>
        {props.inProgress.map((el) =>
            <p>{el}</p>
        )}
        </>  
    );
}
 
export default InProgress;