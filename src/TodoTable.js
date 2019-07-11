import React from 'react';
import TodoList from './TodoList';

class TodoTable extends React.Component  {
  state = {
    sortedBy: ''
  };

  render() {
    const {todos, users} = this.props;
    const {sortedBy} = this.state;

    return (
      <table className="todo-table">
        <thead>
          <tr>
            <td>
              <div className="todo-table__head">
                <div>
                  User
                </div>
                <button
                  onClick={() => this.setState({ sortedBy: 'user' })}
                  className="button-sort"
                >
                  Sort
                </button>
              </div>
            </td>

            <td>
              <div className="todo-table__head">
                <div>
                  Todo
                </div>
                <button
                  onClick={() => this.setState({ sortedBy: 'todo' })}
                  className="button-sort"
                >
                  Sort
                </button>
              </div>
            </td>

            <td>
              <div className="todo-table__head">
                <div>
                  State
                </div>
                <button
                  onClick={() => this.setState({ sortedBy: 'state' })}
                  className="button-sort"
                >
                  Sort
                </button>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <TodoList todos={todos} users={users} sortedBy={sortedBy} />
        </tbody>
      </table>
    );
  };
};


export default TodoTable;