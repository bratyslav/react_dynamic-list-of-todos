import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  state = {
    sortedTodos: [],
    // кэш
    sortByUsers: [],
    sortByTodos: [],
    sortByState: []
  };

  sortingFunc = (firstTodo, secondTodo) => {
    switch (this.props.sortedBy) {
      case 'user':
        const firstUser = this.props.users.find(user => user.id === firstTodo.userId);
        const secondUser = this.props.users.find(user => user.id === secondTodo.userId);
        return firstUser.name.localeCompare(secondUser.name);
      case 'todo':
        return firstTodo.title.localeCompare(secondTodo.title);
      case 'state':
        return firstTodo.completed - secondTodo.completed;
    };
  };

  getSortedTodos = (array) => {
    switch (this.props.sortedBy) {
      case 'user':
        if (this.state.sortByUsers.length === 0) { // если нет в кэше
          this.setState({ sortByUsers: [...array.sort(this.sortingFunc)] });
          return this.state.sortByUsers;
        }
        // если есть в кэше
        return this.state.sortByUsers;
      case 'todo':
        if (this.state.sortByTodos.length === 0) { // если нет в кэше
          this.setState({ sortByTodos: [...array.sort(this.sortingFunc)] });
          return this.state.sortByTodos;
        }
        // если есть в кэше
        return this.state.sortByTodos;
      case 'state':
        if (this.state.sortByState.length === 0) { // если нет в кэше
          this.setState({ sortByState: [...array.sort(this.sortingFunc)] });
          return this.state.sortByState;
        }
        // если есть в кэше
        return this.state.sortByState;
      default:
        return [...array];
    }
  }

  render() {
    return (
      this.getSortedTodos(this.props.todos)
      .map(todo => <TodoItem todo={todo} users={this.props.users} key={todo.id} />)
    );  
  };
};

export default TodoList;