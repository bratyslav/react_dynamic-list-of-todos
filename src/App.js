import React from 'react';
import TodoTable from './TodoTable';
import { loadTodos } from './loadData';
import { loadUsers } from './loadData';

class App extends React.Component {
  state = {
    todos: [],
    users: [],
    loading: false,
    loaded: false,
  }

  loadData = () => {
    this.setState({ loading: true });
    
    loadTodos()
      .then(data => {
        this.setState({ todos: data });
      })

    loadUsers()
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
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Load'}
        </button> 
    );
  }
}

export default App;