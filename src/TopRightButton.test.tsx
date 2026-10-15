import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Top right colour button', () => {
  it('starts purple and turns blue on click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByTestId('top-right-button')
    // initial colour should be the accent variable
    expect(button.getAttribute('style')).toContain('var(--accent)')
    await user.click(button)
    expect(button.getAttribute('style')).toContain('blue')
  })
})
