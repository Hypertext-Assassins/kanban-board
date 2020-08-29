import React, {Component} from 'react';
import './App.css';
import Column from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd';

class Board extends Component {
  state ={
    columns: [
      {
        name: "todo",
        tasks: [{title: "test todo",
                description: "todo description"
                }]
      },
      {
        name: "inProgress",
        tasks: [{title: "inprog todo",
                description: "inprog description"
                }]
      },
      {
        name: "done",
        tasks: [{title: "test done",
                description: "done description"
                }]
      }
    ],
    createColName: ""
  }

  getIndex = (colName) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === colName) index = i;
    } return index;
  }

  /////////// COLUMN FUNCTIONS

  handleAddColumn = (e) => {
    e.preventDefault();
    const columnTitle = this.state.createColName || "New Column"
    let newColumn = {
      name: columnTitle,
      tasks: []
    }
    this.setState({columns: [...this.state.columns, newColumn]})
  }

  handleAddColChange = (e) => {
    this.setState({createColName: e.target.value})
  }

  handleDeleteCol = (colName) => {
    const index = this.getIndex(colName);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns.splice(index, 1);
    this.setState(stateCopy)
  }

  handleUpdateColName = async (colName, newName) => {
    console.log(this.state)
    const index = await this.getIndex(colName);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns[index].name = newName;
    this.setState(stateCopy)
    console.log(this.state)
  }

  onDragEnd = result => {
    //TO DO REORDER THE COLUMN
    const { destination, source, draggableId } = result

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
        return
      }
    
    const column = this.state.columns[source.droppableId]
    const newTasks = Array.from(column.taskIds)
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      tasks: newTasks
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      }
    }

    this.setState(newState)
  }

  /////////// CARD FUNCTIONS

  handleAddCard = (formData, colName) => {
    const index = this.getIndex(colName);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns[index].tasks.push(formData);
    this.setState(stateCopy);
  }

  handleDeleteCard = (formData, colName) => {
    const index = this.getIndex(colName);
    let stateCopy = Object.assign({}, this.state);
    let newTaskArr = stateCopy.columns[index].tasks.filter(task => task !== formData);
    stateCopy.columns[index].tasks = newTaskArr;
    this.setState({stateCopy})
  }

///////////////
  render() { 
    return (
      <>
      <div>hypertext assassins kanban board</div>
      <form onSubmit={this.handleAddColumn}>
        <div className="ui input">
          <input 
            className="ui input" 
            onChange={this.handleAddColChange} ></input>
          </div>
        <button 
          className="ui button"
          type="submit">Add New Column</button>
      </form>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          {this.state.columns.map(column => 
            <Column 
              colName={column.name}
              tasks={column.tasks}
              handleDeleteCol={this.handleDeleteCol}
              handleAddCard={this.handleAddCard}
              handleDeleteCard={this.handleDeleteCard}
              handleUpdateColName={this.handleUpdateColName}
            />
          )}
        </div>
      </DragDropContext>

      </>
    );
  }
}
 
export default Board;

