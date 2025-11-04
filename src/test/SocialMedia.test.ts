import { render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import SocialMedia from '../lib/SocialMedia.svelte'

vi.stubEnv('VITE_FACEBOOK', 'https://facebook.com/test')
vi.stubEnv('VITE_INSTAGRAM', 'https://instagram.com/test')
vi.stubEnv('VITE_LINKEDIN', 'https://linkedin.com/test')
vi.stubEnv('VITE_GITHUB', 'https://github.com/test')

describe('SocialMedia', () => {
  it('renders all social media links with correct hrefs', () => {
    render(SocialMedia)

    const facebook = screen.getByRole('link', { name: /facebook/i })
    const instagram = screen.getByRole('link', { name: /instagram/i })
    const linkedin = screen.getByRole('link', { name: /linkedin/i })
    const github = screen.getByRole('link', { name: /github/i })

    expect(facebook).toHaveAttribute('href', 'https://facebook.com/test')
    expect(instagram).toHaveAttribute('href', 'https://instagram.com/test')
    expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/test')
    expect(github).toHaveAttribute('href', 'https://github.com/test')
  })

  it('contains SVG icons inside links', () => {
    render(SocialMedia)

    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link.querySelector('svg')).not.toBeNull()
    })
  })
})
