import React from 'react';

const Todo = (props) => {
    return (
        <>
        <div>Todo</div>
        {props.todo.map((el) =>
            <p>{el}</p>
        )}
        </>        
    );
}
 
export default Todo;