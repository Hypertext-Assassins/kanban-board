import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import InProgress from './components/InProgress';
import Done from './components/Done';
import FormOverlay from './components/FormOverlay';

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

  render() { 
    return (
      <>
      <div>hello</div>
      <div className="container">
      <Todo
        todo={this.state.todo}
        handleAddCard={this.handleAddCard}
      />
      <InProgress
        inProgress={this.state.inProgress}
        handleAddCard={this.handleAddCard}
      />
      <Done
        done={this.state.done}
        handleAddCard={this.handleAddCard}
      />
      </div>
      <FormOverlay 
        handleAddCard={this.handleAddCard}
      />

      </>
    );
  }
}
 
export default Board;

