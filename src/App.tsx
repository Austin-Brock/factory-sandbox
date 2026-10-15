import { useEffect, useState } from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import type { Todo } from './types'

function App() {
  // Theme handling
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('theme')
      return stored === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    // Apply theme class to root element
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

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
      <header>
        <h1>To-dos</h1>
        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
        <p className="count">{remaining} remaining</p>
      </header>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}

export default App
