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
                onClick={()=> props.handleDeleteCard(props.task, props.colName)}>Delete</button>
            <button 
                className="ui blue button"
                onClick={() => props.handleUpdateCard(props.task, props.colName)}>Update</button>
        </>
    );
}
 
export default Task;