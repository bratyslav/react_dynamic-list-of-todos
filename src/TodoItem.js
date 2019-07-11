import React from 'react';
import User from './User';

const TodoItem = ({todo, users}) => (
  <tr>
    <User user={users.find(user => user.id === todo.userId)} />
    <td>{todo.title}</td>
    <td>{todo.completed ? 'completed' : 'active'}</td>
  </tr>
);


export default TodoItem;