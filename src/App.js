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

  ///////////

  handleAddCard = (formData, cardType) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === cardType) index = i
    }
    let stateCopy = Object.assign({}, this.state);
    stateCopy.columns[index].tasks.push(formData);
    this.setState(stateCopy);
  }

  // handleAddCard1 = (formData, cardType) => {
  //   if (cardType === "todo") {
  //     this.setState({todo: [...this.state.todo, formData]})
  //   } else if (cardType === "inProgress") {
  //     this.setState({inProgress: [...this.state.inProgress, formData]})
  //   } else this.setState({done: [...this.state.done, formData]})
  // }

  handleDeleteCard = (formData, cardType) => {
    let index;
    for (let i = 0; i< this.state.columns.length; i++) {
      if (this.state.columns[i].name === cardType) index = i
    }
    let stateCopy = Object.assign({}, this.state);
    let newTaskArr = stateCopy.columns[index].tasks.filter(task => task !== formData);
    stateCopy.columns[index].tasks = newTaskArr;
    this.setState({stateCopy})
  }

  // handleDeleteCard1 = (formData, cardType) => {
  //   if (cardType ==="todo"){
  //     this.setState({todo: this.state.todo.filter(task => task !== formData)})
  //   } else if (cardType ==="inProgress") {
  //     this.setState({inProgress: this.state.inProgress.filter(task => task !== formData)})
  //   } else this.setState({done: this.state.done.filter(task => task !== formData)})
  // }

  handleUpdateCard = (formData, cardType) => {

  }

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
            name={column.name}
            tasks={column.tasks}
            handleDeleteCol={this.handleDeleteCol}
            handleAddCard={this.handleAddCard}
            handleDeleteCard={this.handleDeleteCard}
            handleUpdateCard={this.handleUpdateCard}
          />
        )}
        
      {/* <Todo
        todo={this.state.todo}
        handleAddCard={this.handleAddCard}
        handleDeleteCard={this.handleDeleteCard}
        handleUpdateCard={this.handleUpdateCard}
      />
      <InProgress
        inProgress={this.state.inProgress}
        handleAddCard={this.handleAddCard}
        handleDeleteCard={this.handleDeleteCard}
        handleUpdateCard={this.handleUpdateCard}
      />
      <Done
        done={this.state.done}
        handleAddCard={this.handleAddCard}
        handleDeleteCard={this.handleDeleteCard}
        handleUpdateCard={this.handleUpdateCard}
      /> */}
      </div>

      </>
    );
  }
}
 
export default Board;

