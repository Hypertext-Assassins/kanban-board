import React, {useState} from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
    const [showDesc, setShowDesc] = useState(false);

    const handleClick = () => {
        if (showDesc) setShowDesc(false)
        else setShowDesc(true)
    }

    return (  
        <>
        <Draggable draggableId={props.title} index={props.idx}>
            {provided => (
            <div {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
            <p className="task">{props.title}</p>
                {(showDesc) ?
                <>
                <p className="task">{props.description}</p>
                    <button
                        className="ui button"
                        onClick={handleClick}
                        
                    >Hide</button>
                </>
                    :
                    <button
                        className="ui button"
                        onClick={handleClick}
                    >...</button>
                }
                <button 
                    className="ui black button"
                    onClick={()=> props.handleDeleteCard(props.task, props.colName)}>x</button>
                </div>

            )}
            </Draggable>
        </>
    );
}
 
export default Task;