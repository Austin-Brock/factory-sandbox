import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('shows an empty state', () => {
    render(<App />)
    expect(screen.getByText('Nothing to do yet.')).toBeInTheDocument()
    expect(screen.getByText('0 remaining')).toBeInTheDocument()
  })

  it('adds a to-do', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('New to-do'), 'Buy milk{Enter}')
    expect(screen.getByText('Buy milk')).toBeInTheDocument()
    expect(screen.getByText('1 remaining')).toBeInTheDocument()
  })

  it('ignores blank input', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('New to-do'), '   {Enter}')
    expect(screen.getByText('Nothing to do yet.')).toBeInTheDocument()
  })

  it('toggles a to-do as done', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('New to-do'), 'Walk dog{Enter}')
    await user.click(screen.getByRole('checkbox'))
    expect(screen.getByRole('checkbox')).toBeChecked()
    expect(screen.getByText('0 remaining')).toBeInTheDocument()
  })

  it('deletes a to-do', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('New to-do'), 'Call mom{Enter}')
    await user.click(screen.getByLabelText('Delete Call mom'))
    expect(screen.queryByText('Call mom')).not.toBeInTheDocument()
  })
})
