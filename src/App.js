import React, {Component} from 'react';
import logo from './logo.svg';
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

  addCard = () => {

  }

  render() { 
    return (
      <>
      <div>hello</div>
      <Todo
        todo={this.state.todo}
      />
      <InProgress
        inProgress={this.state.inProgress}
      />
      <Done
        done={this.state.done}
      />
      </>
    );
  }
}
 
export default Board;

