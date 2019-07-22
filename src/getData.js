const loadTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json()

  return data;
};

const loadUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json()

  return data;
};

export const getData = async () => {
  const [todos, users] = await Promise.all([
    loadTodos(),
    loadUsers(),
  ]);

  const todoList = todos.map(todo => ({
    user: users.find(user => user.id === todo.userId).name,
    task: todo.title,
    state: todo.completed
  }));

  return todoList;
};

