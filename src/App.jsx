import React, { useState } from 'react';
import DigitalClock from './components/DigitalClock';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>Yapılacaklar Listesi</h1>
      <DigitalClock />
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      <p style={{ textAlign: 'center' }}>Toplam: {todos.length} görev</p>
    </div>
  );
}

export default App;