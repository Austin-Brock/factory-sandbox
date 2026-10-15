import { useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import type { Todo } from './types'

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo(text: string) {
    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), text, done: false },
    ])
  }

  function toggleTodo(id: string) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    )
  }

  function deleteTodo(id: string) {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  const remaining = todos.filter((todo) => !todo.done).length

  return (
    <main className="app">
        <button
          data-testid="top-left-button"
          onClick={() => setButtonClicked(true)}
          style={{
            position: 'fixed',
            top: '16px',
            left: '16px',
            backgroundColor: buttonClicked ? 'red' : 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 14px',
            cursor: 'pointer',
          }}
        >
          Click me
        </button>
      <header>
        <h1>To-dos</h1>
        <p className="count">{remaining} remaining</p>
      </header>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}

export default App
