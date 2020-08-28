import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo';
import InProgress from './components/InProgress';
import Done from './components/Done';

class Board extends Component {
  state = {
    todo: ["test for todo state"],
    inProgress: ["inprogress state"],
    done: ["done state"]
  }


  handleAddCard = (formData, cardType) => {
    if (cardType === "todo") {
      this.setState({todo: [...this.state.todo, formData]})
    } else if (cardType === "inProgress") {
      this.setState({inProgress: [...this.state.inProgress, formData]})
    } else this.setState({done: [...this.state.done, formData]})
  }

  handleDeleteCard = (formData, cardType) => {
    if (cardType ==="todo"){
      this.setState({todo: this.state.todo.filter(task => task !== formData)})
    } else if (cardType ==="inProgress") {
      this.setState({inProgress: this.state.inProgress.filter(task => task !== formData)})
    } else this.setState({done: this.state.done.filter(task => task !== formData)})
  }

  render() { 
    return (
      <>
      <div>hello</div>
      <div className="container">
      <Todo
        todo={this.state.todo}
        handleAddCard={this.handleAddCard}
        handleDeleteCard={this.handleDeleteCard}
      />
      <InProgress
        inProgress={this.state.inProgress}
        handleAddCard={this.handleAddCard}
        handleDeleteCard={this.handleDeleteCard}
      />
      <Done
        done={this.state.done}
        handleAddCard={this.handleAddCard}
        handleDeleteCard={this.handleDeleteCard}
      />
      </div>

      </>
    );
  }
}
 
export default Board;

