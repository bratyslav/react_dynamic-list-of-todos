import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => (
  todos.map(todo => {
    const { user, task, state } = todo;

    return (
      <tr key={task}>
        <td>{user}</td>
        <td>{task}</td>
        <td>{state ? 'completed' : 'not completed'}</td>
      </tr>
    );
  }) 
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;