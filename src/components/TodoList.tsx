import type { Todo } from '../types'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="empty">Nothing to do yet.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? 'done' : undefined}>
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            <span>{todo.text}</span>
          </label>
          <button
            type="button"
            aria-label={`Delete ${todo.text}`}
            onClick={() => onDelete(todo.id)}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  )
}
