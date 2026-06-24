import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.github.com/search/users', ({ request }) => {
    const url = new URL(request.url)
    const query = url.searchParams.get('q')
    return HttpResponse.json({
      items: [
        {
          id: 1,
          login: query || 'testuser',
          html_url: `https://github.com/${query || 'testuser'}`,
          avatar_url: `https://avatars.github.com/${query || 'testuser'}`,
        },
      ],
    })
  }),
  http.get('https://api.github.com/users', () => {
    return HttpResponse.json([
      {
        id: 1,
        login: 'user1',
        html_url: 'https://github.com/user1',
        avatar_url: 'https://avatars.github.com/user1',
      },
      {
        id: 2,
        login: 'user2',
        html_url: 'https://github.com/user2',
        avatar_url: 'https://avatars.github.com/user2',
      },
    ])
  }),
]
