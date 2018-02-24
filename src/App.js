import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todo-list';

class App extends Component {
  render() {
    return (
     <div className="app">
        <TodoList/>
     </div>
    );
  }
}

export default App;
