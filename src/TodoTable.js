import React from 'react';
import TodoList from './TodoList';

class TodoTable extends React.Component  {
  state = {
    sortedBy: { attribute: '', wasSorted: true }
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
                  onClick={() => this.setState((prev) => {
                    if (prev.sortedBy.attribute && prev.sortedBy.attribute !== 'user') {
                      return {
                        sortedBy: { attribute: 'user', wasSorted: false }
                      };
                    };

                    return {
                      sortedBy: { attribute: 'user', wasSorted: !prev.sortedBy.wasSorted }
                    };
                  })}
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
                  onClick={() => this.setState((prev) => {
                    if (prev.sortedBy.attribute && prev.sortedBy.attribute !== 'todo') {
                      return {
                        sortedBy: { attribute: 'todo', wasSorted: false }
                      };
                    };

                    return {
                      sortedBy: { attribute: 'todo', wasSorted: !prev.sortedBy.wasSorted }
                    }
                  })}
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
                  onClick={() => this.setState((prev) => {
                    if (prev.sortedBy.attribute && prev.sortedBy.attribute !== 'state') {
                      return {
                        sortedBy: { attribute: 'state', wasSorted: false }
                      };
                    };

                    return {
                      sortedBy: { attribute: 'state', wasSorted: !prev.sortedBy.wasSorted }
                    }
                  })}
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