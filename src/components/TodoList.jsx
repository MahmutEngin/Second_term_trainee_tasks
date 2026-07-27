import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888' }}>Henüz yapılacak bir şey yok.</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}