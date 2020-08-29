import React, { useState, Component } from 'react';
import './List.css';
import FormOverlay from './FormOverlay';
import Task from './Task';

const Column = (props) => {    

    const [newColName, setNewColName] = useState("");

    const handleSetNewColName = (e) => {
        e.preventDefault();
        props.handleUpdateColName(props.colName, newColName);
    }

    return (
        <>
        <div className="container-list">
        <form onSubmit={handleSetNewColName}>
            <input 
                className="header"
                placeholder={props.colName}
                onChange={e => setNewColName(e.target.value)}
            />
        </form>

        <button className="ui button" onClick={() => props.handleDeleteCol(props.colName)} >Delete Column</button>
        <FormOverlay 
            handleAddCard={props.handleAddCard}
            colName={props.colName}
        />
        {props.tasks.map((el) =>
            <div>
            <Task 
                title={el.title}
                description={el.description}
                task={el}
                handleDeleteCard={props.handleDeleteCard}
                colName={props.colName}
            />
            </div>
        )}
        </div>
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