import { render, screen, waitFor, act } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { server } from '../../test/mocks/server'
import UserList from './UserList'

describe('UserList', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows loading spinner on initial render', () => {
    render(<UserList searched="" />)
    const loader = document.querySelector('.loader')
    expect(loader).toBeInTheDocument()
    expect(loader.classList.contains('d-none')).toBe(false)
  })

  it('hides loading spinner after timeout completes', () => {
    vi.useFakeTimers()
    render(<UserList searched="" />)
    const loader = document.querySelector('.loader')
    expect(loader.classList.contains('d-none')).toBe(false)

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(loader.classList.contains('d-none')).toBe(true)
  })

  it('fetches and displays all users when no search query', async () => {
    render(<UserList searched="" />)
    await waitFor(() => {
      expect(screen.getByText('user1')).toBeInTheDocument()
    })
    expect(screen.getByText('user2')).toBeInTheDocument()
  })

  it('fetches and displays search results when searched prop is provided', async () => {
    render(<UserList searched="octocat" />)
    await waitFor(() => {
      expect(screen.getByText('octocat')).toBeInTheDocument()
    })
  })

  it('shows no results message when search returns empty', async () => {
    server.use(
      http.get('https://api.github.com/search/users', () => {
        return HttpResponse.json({ items: [] })
      }),
    )
    render(<UserList searched="nonexistent" />)
    await waitFor(() => {
      expect(screen.getByText('No Results found!')).toBeInTheDocument()
    })
  })
})
