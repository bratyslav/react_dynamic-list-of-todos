import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, users }) => (
  <tr>
    <td>
      {
        users.find(user => user.id === todo.userId).name
      }
    </td>
    <td>{todo.title}</td>
    <td>{todo.completed ? 'completed' : 'active'}</td>
  </tr>
);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

export default TodoItem;