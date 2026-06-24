import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders Navbar, Main, and Footer', () => {
    render(<App />)
    expect(screen.getByText('Github Finder')).toBeInTheDocument()
    expect(screen.getByText('©2026 All rights reserved!')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
