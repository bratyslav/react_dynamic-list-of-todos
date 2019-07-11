import React from 'react';
import TodoTable from './TodoTable';

class App extends React.Component {
  state = {
    todos: [],
    users: [],
    loading: false,
    loaded: false,
  }

  loadData = () => {
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
    const {todos, users, loading, loaded} = this.state;

    return (
      loaded
      ? <TodoTable todos={todos} users={users} />
      : <button
          onClick={this.loadData}
          className="button-load"
        >
          {loading ? 'Loading...' : 'Load'}
        </button> 
    );
  }
}

export default App;