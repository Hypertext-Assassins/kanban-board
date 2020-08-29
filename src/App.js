import React, {Component} from 'react';
import './App.css';
import Column from './components/Column';

class Board extends Component {
  // state = {
    // todo: ["test for todo state"],
  //   inProgress: ["inprogress state"],
  //   done: ["done state"]
  // }

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
    newColName: ""
  }

  /////////// COLUMN FUNCTIONS

  handleAddColumn = (e) => {
    e.preventDefault();
    let newColumn = {
      name: this.state.newColName,
      tasks: []
    }
    this.setState({columns: [...this.state.columns, newColumn]})
  }

  handleAddColChange = (e) => {
    this.setState({newColName: e.target.value})
  }

  handleDeleteCol = (colName) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === colName) index = i
    }
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns.splice(index, 1);
    this.setState(stateCopy)
  }

  handleUpdateColName = (colName, newName) => {
    console.log(colName)
    console.log(this.state)
    console.log(newName)
  }

  /////////// CARD FUNCTIONS

  handleAddCard = (formData, colName) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === colName) index = i
    }
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns[index].tasks.push(formData);
    this.setState(stateCopy);
  }

  handleDeleteCard = (formData, colName) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === colName) index = i
    }
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

      </>
    );
  }
}
 
export default Board;

