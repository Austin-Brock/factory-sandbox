import { useState, type FormEvent } from 'react'

interface TodoFormProps {
  onAdd: (text: string) => void
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        aria-label="New to-do"
        placeholder="What needs doing?"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
