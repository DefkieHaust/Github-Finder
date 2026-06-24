import { render, screen } from '@testing-library/react'
import UserCard from './UserCard'

describe('UserCard', () => {
  const props = {
    avatar: 'https://avatars.github.com/test',
    name: 'testuser',
    url: 'https://github.com/testuser',
  }

  it('renders avatar with correct src and alt', () => {
    render(<UserCard {...props} />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', props.avatar)
    expect(img).toHaveAttribute('alt', props.name)
  })

  it('renders username heading', () => {
    render(<UserCard {...props} />)
    expect(screen.getByText('testuser')).toBeInTheDocument()
  })

  it('renders profile link with correct href', () => {
    render(<UserCard {...props} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', props.url)
    expect(link).toHaveTextContent('View Profile >')
  })
})
