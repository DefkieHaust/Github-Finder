import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBox from './SearchBox'

describe('SearchBox', () => {
  it('renders a text input', () => {
    render(<SearchBox setSearched={() => {}} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('calls setSearched with value stripped of spaces on Enter', async () => {
    const setSearched = vi.fn()
    const user = userEvent.setup()
    render(<SearchBox setSearched={setSearched} />)
    await user.type(screen.getByRole('textbox'), 'hello world')
    await user.keyboard('{Enter}')
    expect(setSearched).toHaveBeenCalledWith('helloworld')
  })

  it('does not call setSearched on non-Enter key press', async () => {
    const setSearched = vi.fn()
    const user = userEvent.setup()
    render(<SearchBox setSearched={setSearched} />)
    await user.type(screen.getByRole('textbox'), 'hello')
    await user.keyboard('{Shift>}{Shift}')
    expect(setSearched).not.toHaveBeenCalled()
  })
})
