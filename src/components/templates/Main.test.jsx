import { render, screen } from '@testing-library/react'
import Main from './Main'

describe('Main', () => {
  it('renders UserList with the given searched prop', () => {
    render(<Main searched="react" />)
    expect(screen.getByText('No Results found!')).toBeInTheDocument()
  })
})
