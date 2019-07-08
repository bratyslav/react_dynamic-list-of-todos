import React from 'react';
import TodoItem from './TodoItem';
import { users } from './users';

const TodoList = (props) => {
  const sortedFunc = (firstTodo, secondTodo) => {
    switch (props.sortedBy) {
      case 'user':
        const firstUser = props.users.find(user => user.id === firstTodo.userId);
        const secondUser = props.users.find(user => user.id === secondTodo.userId);
        const userArr = [firstUser.name, secondUser.name].sort();
        if (userArr[0] === firstUser.name) return -1;
        return 1;
      case 'todo':
        const todoArr = [firstTodo.title, secondTodo.title].sort();
        if (todoArr[0] === firstTodo.title) return -1;
        return 1;
      case 'state':
        return firstTodo.completed - secondTodo.completed;
    }
  }

  return props.todos
    .sort(sortedFunc)
    .map(todo => <TodoItem todo={todo} users={props.users} key={todo.id} />);
}

export default TodoList;