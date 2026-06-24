import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the Github Finder heading', () => {
    render(<Navbar setSearched={() => {}} />)
    expect(screen.getByText('Github Finder')).toBeInTheDocument()
  })

  it('renders the SearchBox input', () => {
    render(<Navbar setSearched={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
