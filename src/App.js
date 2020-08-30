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

    const startColIdx = this.getIndex(source.droppableId); //get idx of start column
    const column = this.state.columns[startColIdx] // column = start col

    let idxOfTask;
    for(let i=0; i<column.tasks.length; i++){
      if (column.tasks[i].title === draggableId) idxOfTask=i;  //idxOfTask = idx of task being dragged
    } 

    let taskObj = column.tasks[idxOfTask]; //get the actual object of task being dragged
    const newTasks = column.tasks;  //variable for array of tasks inside current column
    newTasks.splice(source.index, 1);  //removes task obj from old location in col array
    newTasks.splice(destination.index, 0, taskObj);  //inserts taskObj into new location

    const newColArr = this.state.columns;  // newColArr = arr of all cols in state
    let endColIdx = this.getIndex(destination.droppableId)  //get idx of ending column
    const newColObj = {  //create new obj (with updated tasks arr) that will go inside the columns arrary in state
      name: source.droppableId,
      tasks: newTasks
    }
    newColArr.splice(startColIdx, 1, newColObj) //replace with newColObj, currently this is using startColIdx (since current code only allows chnages for current col) but this hsoudl be changed to endColIdx
    const newState = {columns: newColArr}
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

