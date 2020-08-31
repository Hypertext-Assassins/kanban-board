import React, {useState} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../App.css';

const Task = (props) => {
    const [showDesc, setShowDesc] = useState(false);

    const handleClick = () => {
        if (showDesc) setShowDesc(false)
        else setShowDesc(true)
    }

    return (  
        <div className="task-container">
        <Draggable draggableId={props.title} index={props.idx}>
            {provided => (
            <div {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
            <p className="task" id="task-title">{props.title}</p>
                {(showDesc) ?
                <>
                <p className="task" id="task-description">{props.description}</p>
                    <button
                        className="ui mini button"
                        onClick={handleClick}
                        
                    ><i className="arrow alternate circle up outline fitted icon"></i></button>
                </>
                    :
                    <button
                        className="ui button mini"
                        onClick={handleClick}
                    ><i className="arrow alternate circle down outline fitted icon"></i></button>
                }
                <button 
                    className="ui black button mini"
                    onClick={()=> props.handleDeleteCard(props.task, props.colName)}>
                        <i className="x fitted icon"></i>
                    </button>
                </div>

            )}
            </Draggable>
        </div>
    );
}
 
export default Task;