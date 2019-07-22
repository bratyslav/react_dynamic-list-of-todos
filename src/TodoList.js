import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


const TodoList = ({ data, sortedBy }) => {
  const { users, todos } = data;
  const visibleTodos = [...todos];

  const sortingFunc = (firstTodo, secondTodo) => {
    switch (sortedBy.attribute) {
      case 'user':
        const firstUser = users.find(user => user.id === firstTodo.userId);
        const secondUser = users.find(user => user.id === secondTodo.userId);
        return firstUser.name.localeCompare(secondUser.name);
      case 'todo':
        return firstTodo.title.localeCompare(secondTodo.title);
      case 'state':
        return firstTodo.completed - secondTodo.completed;
      default:
        break;
    }
  }

  return sortedBy.wasSorted
  ? visibleTodos
      .sort(sortingFunc)
      .reverse()
      .map(todo => <TodoItem todo={todo} users={users} key={todo.id} />)
  : visibleTodos
      .sort(sortingFunc)
      .map(todo => <TodoItem todo={todo} users={users} key={todo.id} />)
};

TodoList.propTypes = {
  data: PropTypes.object.isRequired,
  sortedBy: PropTypes.object.isRequired
};

export default TodoList;