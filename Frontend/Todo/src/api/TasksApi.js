
const API_URL = "/api/task";

export const getTodos = async () => {
  const token = localStorage.getItem('token');
  const res = await fetch(API_URL, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (!res) return new Error('Not Found Todos')
  return res.json();
};

export const createTodo = async (title) => {
  const token = localStorage.getItem('token');
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) return new Error('Failed to create todo');
  return res.json();
};

export const updateTodo = async (id, updates) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });
  if (!res.ok) return new Error('Failed to Update Todo')
  return res.json()
}



export const deleteTodo = async (id) => {
  const token = localStorage.getItem('token');
  console.log(id)
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) return new Error('Failed to delete todos');
  return res.json()
};
