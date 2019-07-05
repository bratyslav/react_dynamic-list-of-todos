import React from 'react';

function User({person}) {
  return (
    <div className="user__container">
      <span className="user">
        {person.name}
      </span>
    </div>
  )
}

export default User;