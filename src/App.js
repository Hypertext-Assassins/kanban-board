import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import InProgress from './components/InProgress';
import Done from './components/Done';

class Board extends Component {
  state = {
    todo: [],
    inProgress: [],
    done: []
  }
  render() { 
    return (
      <>
      <div>hello</div>
      <Todo/>
      <InProgress/>
      <Done/>
      </>
    );
  }
}
 
export default Board;

