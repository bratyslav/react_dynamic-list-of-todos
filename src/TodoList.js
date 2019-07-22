import React from 'react';
import PropTypes from 'prop-types';

const getTodoList = (todos) => {
  return todos.map(todo => {
    const { user, task, state } = todo;

    return (
      <tr key={task}>
        <td>{user}</td>
        <td>{task}</td>
        <td>{state ? 'completed' : 'not completed'}</td>
      </tr>
    )
  })
};

class TodoList extends React.Component {
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
              Todo
            </th>

            <th
              onClick={() => this.getSortedTodos('state')}
            >
              State
            </th>
          </tr>

          {getTodoList(visibleTodos)}
        </tbody>  
      </table>
    );
  };
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;