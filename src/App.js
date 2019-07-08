import React from 'react';
import TodoTable from './TodoTable';

class App extends React.Component {
  state = {
    todos: [],
    users: [],
    loading: false,
    loaded: false,
  }

  isLoading = () => {
    this.setState({ loading: true });
    
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ todos: data });
      })

      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({ users: data });
        })
      .then(() => this.setState({ loaded: true }));
  }

  render() {
    return (
      this.state.loaded
      ? <TodoTable todos={this.state.todos} users={this.state.users} />
      : <button
          onClick={this.isLoading}
          className="button-load"
        >
          {this.state.loading ? 'Loading...' : 'Load'}
        </button> 
    );
  }
}

export default App;