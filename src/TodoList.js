import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const visibleTodos = [...props.todos];
  // чтобы исключить мутации загруженных данных

  const sortingFunc = (firstTodo, secondTodo) => {
    switch (props.sortedBy) {
      case 'user':
        const firstUser = props.users.find(user => user.id === firstTodo.userId);
        const secondUser = props.users.find(user => user.id === secondTodo.userId);
        return firstUser.name.localeCompare(secondUser.name);
      case 'todo':
        return firstTodo.title.localeCompare(secondTodo.title);
      case 'state':
        return firstTodo.completed - secondTodo.completed;
    }
  }

  return visibleTodos
    .sort(sortingFunc)
    .map(todo => <TodoItem todo={todo} users={props.users} key={todo.id} />);
}

export default TodoList;