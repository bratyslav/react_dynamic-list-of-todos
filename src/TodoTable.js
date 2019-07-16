import React from 'react';
import TodoList from './TodoList';

class TodoTable extends React.Component  {
  state = {
    sortedBy: { attribute: '', wasSorted: false }
  };

  setSortDirection = (attribute) => this.setState((prev) => {
    if (!prev.sortedBy.attribute || prev.sortedBy.attribute !== attribute) {
      return {
        sortedBy: { attribute: attribute, wasSorted: false }
      };
    };

    return {
      sortedBy: { attribute: attribute, wasSorted: !prev.sortedBy.wasSorted }
    }
  });

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
                  onClick={() => this.setSortDirection('user')}
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
                  onClick={() => this.setSortDirection('todo')}
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
                  onClick={() => this.setSortDirection('state')}
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