import React, { useState, Component } from 'react';
import './List.css';
import FormOverlay from './FormOverlay';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Column = (props) => {    

    const [newColName, setNewColName] = useState(props.colName)
    const [showForm, setShowForm] = useState(false)


    const handleSetNewColName = (e) => {
        e.preventDefault();
        setShowForm(false);
        props.handleUpdateColName(props.colName, newColName);
    }

    const handleShowForm = () => {
        setShowForm(true)
    }

    return (
        <>
        <Draggable draggableId={props.colName} index={props.idx}>
            {(provided) => (
        <div 
            className="container-list" 
            {...provided.draggableProps}
            ref={provided.innerRef}
        >
        {showForm ?
        <form onSubmit={handleSetNewColName} hidden={!showForm} {...provided.dragHandleProps}>
            <input 
                className="header"
                placeholder={props.colName}
                onChange={e => setNewColName(e.target.value)}
            />
        </form>
        :
        <div className="header"
        id="column-title"
        onClick={handleShowForm}
        {...provided.dragHandleProps}
        >
            {props.colName}
            <button onClick={() => props.handleDeleteCol(props.colName)} ><i className="trash fitted small icon"></i></button>
        </div> }
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            colName={props.colName}
        />
        <Droppable droppableId={props.colName} type="task">
            {provided => (
                <div
                    className="droppable"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {props.tasks.map((el, idx) =>
                <div>
                    <Task 
                        key={`${el.title}${idx}`}
                        title={el.title}
                        description={el.description}
                        task={el}
                        idx={idx}
                        handleDeleteCard={props.handleDeleteCard}
                        colName={props.colName}
                    />
                </div>
                )}
                {provided.placeholder}
                </div>
            )}
        </Droppable>
        {/* {props.tasks.map((el) =>
            <div>
            <Task 
                title={el.title}
                description={el.description}
                task={el}
                handleDeleteCard={props.handleDeleteCard}
                colName={props.colName}
            />
            </div>
        )} */}
        </div>
            )}
        </Draggable>
        </>  
    );
}
 
export default Column;

// class Column extends Component {
//     state = {
//         formData: ""
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state.formData)
//         this.props.handleUpdateColName(this.props.colName, this.state.formData)
//     } 

//     handleChange = (e) => {
//         this.setState({formData: e.target.value})
//     }


//     render() {
//         return (
//             <>
//             <div className="container-list">
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     className="header"
//                     placeholder={this.props.colName}
//                     onChange={this.handleChange}
//                 />
//             </form>
        
//             <div>{this.props.colName}</div>

//             <button className="ui button" onClick={() => this.props.handleDeleteCol(this.props.colName)} >Delete Column</button>
//             <FormOverlay 
//                 handleAddCard={this.props.handleAddCard}
//                 colName={this.props.colName}
//             />
//             {this.props.tasks.map((el) =>
//                 <div>
//                 <Task 
//                     title={el.title}
//                     description={el.description}
//                     task={el}
//                     handleDeleteCard={this.props.handleDeleteCard}
//                     colName={this.props.colName}
//                 />
//                 </div>
//             )}
//             </div>
//             </>  
//         );
//     }
// }

// export default Column;