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

  handleAddCard = (formData) => {
    this.setState({todo: [...this.state.todo, formData]})
  }

  render() { 
    return (
      <>
      <div>hello</div>
      <div className="container">
      <Todo
        todo={this.state.todo}
      />
      <InProgress
        inProgress={this.state.inProgress}
      />
      <Done
        done={this.state.done}
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

