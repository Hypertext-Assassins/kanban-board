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

  /////////// COLUMN FUNCTIONS

  getIndex = (colName) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === colName) index = i;
    } return index;
  }

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
    const index = await this.getIndex(colName);
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns[index].name = newName;
    this.setState(stateCopy)
  }

  /////// DRAG AND DROP FUNCTION
  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const startColIdx = this.getIndex(source.droppableId); //get idx of start column
    const endColIdx = this.getIndex(destination.droppableId)  //get idx of ending column
    const startCol = this.state.columns[startColIdx] // startCol = start col
    const endCol = this.state.columns[endColIdx] // endCol = end col

    let idxOfTask;
    for(let i=0; i<startCol.tasks.length; i++){
      if (startCol.tasks[i].title === draggableId) idxOfTask=i;  //idxOfTask = idx of task being dragged
    } 

    let taskObj = startCol.tasks[idxOfTask]; //get the actual object of task being dragged
    const newTasksStart = startCol.tasks;  //var for arr of tasks in start col
    const newTasksEnd = endCol.tasks; //var for arr of tasks in end col
    
    newTasksStart.splice(source.index, 1);  //removes task obj that's being dragged from original array
    newTasksEnd.splice(destination.index, 0, taskObj);  //inserts taskObj into new location

    const newStartColObj = {  //create new obj with updated tasks from the orignal starting tasks array
      name: source.droppableId,  
      tasks: newTasksStart
    }
    const newEndColObj = {  //create new obj with updated tasks for teh destination tasks array
      name: destination.droppableId,  
      tasks: newTasksEnd
    }
    
    const stateCols = this.state.columns;  // stateCols = arr of all cols in state
    stateCols.splice(startColIdx, 1, newStartColObj) //replaces starting task obj (located at startColIdx) with the updated starting tasks obj (newStartcolObj)
    stateCols.splice(endColIdx, 1, newEndColObj) //replaces ending task obj (located at endColIdx) with the updated ending task obj
    const newState = {columns: stateCols}
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
              key={column.name}
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

