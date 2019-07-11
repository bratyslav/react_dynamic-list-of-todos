export const loadTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
};

export const loadUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
};
