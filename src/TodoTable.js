import React from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

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
    const { sortedBy } = this.state;

    return (
      <table className="todo-table">
        <tbody>
          <tr>
            <th
              className="todo-table__head"
              onClick={() => this.setSortDirection('user')}
            >
              User
            </th>

            <th
              className="todo-table__head"
              onClick={() => this.setSortDirection('todo')}
            >
              Todo
            </th>

            <th
              className="todo-table__head"
              onClick={() => this.setSortDirection('state')}
            >
              State
            </th>
          </tr>
          
          <TodoList data={this.props} sortedBy={sortedBy} />
        </tbody>
      </table>
    );
  };
};

TodoTable.propTypes = {
  todos: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
}

export default TodoTable;