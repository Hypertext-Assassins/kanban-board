import React from 'react';

const Done = (props) => {
    return (
        <>
        <div>Done</div>
        {props.done.map((el) =>
            <p>{el}</p>
        )}
        </>  
    );
}
 
export default Done;