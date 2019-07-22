import React, { Component } from 'react';
import './App.css';
import { getData } from './getData';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todoList: [],
    requested: false,
    loaded: false
  };

  setData = async () => {
    this.setState({ requested: true });

    const todoList = await getData();

    this.setState({
      todoList: todoList,
      loaded: true
    });
  }

  render() {
    const { requested, loaded, todoList } = this.state;

    return (
      <div>
        {
          loaded
          ? <TodoList todos={todoList} />
          : <button
            className="load-button"
            onClick={this.setData}
            disabled={requested}
          >
            {requested ? 'Loading...' : 'Load'}
          </button>
        }
      </div>
    );
  }
}

export default App;
