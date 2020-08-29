import React, {useState} from 'react';

const Task = (props) => {
    const [showDesc, setShowDesc] = useState(false);

    const handleClick = () => {
        if (showDesc) setShowDesc(false)
        else setShowDesc(true)
    }

    return (  
        <>
        <p className="todo">{props.title}</p>
            {(showDesc) ?
            <>
            <p>{props.description}</p>
                <button
                    className="ui button"
                    onClick={handleClick}
                >Hide Details</button>
            </>
                :
                <button
                    className="ui button"
                    onClick={handleClick}
                >Show Details</button>
            }
            <button 
                className="ui black button"
                onClick={()=> props.handleDeleteCard(props.task, props.colName)}>Delete</button>
        </>
    );
}
 
export default Task;