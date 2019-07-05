import React from 'react';
import User from './User';
import { users } from './users';
import TodoList from './TodoList';

const UserCards = () => {
  return users.map(person => (
    <div className='user-card'>
      <User person={person} />
      <TodoList person={person} />
    </div>
  ));
}

export default UserCards;