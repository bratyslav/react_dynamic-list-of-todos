import React from 'react';
import User from './User';

const TodoItem = (props) => (
  <tr>
    <User user={props.users.find(user => user.id === props.todo.userId)} />
    <td>{props.todo.title}</td>
    <td>{props.todo.completed ? 'completed' : 'active'}</td>
  </tr>
);


export default TodoItem;