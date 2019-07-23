import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

class TodoTable extends React.Component {
  state = {
    visibleTodos: [...this.props.todos],
    sortAttribute: ''
  };

  getSortedTodos = (attribute) => {
    const { todos } = this.props;
    const { sortAttribute } = this.state;

    if (sortAttribute === attribute) {
      this.setState((prevState) => ({
        visibleTodos: prevState.visibleTodos.reverse()
      }));
    } else {
      this.setState({
        sortAttribute: attribute
      })
  
      switch (attribute) {
        case 'user':
        case 'task':
          this.setState({
            visibleTodos: todos.sort((a, b) => (
              a[attribute].localeCompare(b[attribute])
            ))
          });
          break;
  
        case 'state':
          this.setState({
            visibleTodos: todos.sort((a, b) => (
              b[attribute] - a[attribute]
            ))
          });
          break;
  
        default:
          break;  
      };
    }
  };

  render() {
    const { visibleTodos } = this.state;

    return (
      <table>
        <tbody>
          <tr>
            <th
              onClick={() => this.getSortedTodos('user')}
            >
              User
            </th>

            <th
              onClick={() => this.getSortedTodos('task')}
            >
              Task
            </th>

            <th
              onClick={() => this.getSortedTodos('state')}
            >
              State
            </th>
          </tr>

          <TodoList todos={visibleTodos} />
        </tbody>  
      </table>
    );
  };
};

TodoTable.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoTable;