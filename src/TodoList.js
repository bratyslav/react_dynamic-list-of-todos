import React from 'react';
import TodoItem from './TodoItem';
import { todos } from './todos';

class TodoList extends React.Component  {
  state = {
    sorted: false
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.sorted
            ? todos
                .filter(todo => todo.userId === this.props.person.id)
                .sort((x, y) => Number(y.completed) - Number(x.completed))
                .map(todo => <TodoItem todo={todo} />)
            : todos
                .filter(todo => todo.userId === this.props.person.id)
                .map(todo => <TodoItem todo={todo} />)
          }
        </ul>
        <div className="button-sort__container">
          <button
            onClick={() => this.setState({ sorted: true })}
            className="button-sort"
          >
            Sort
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;