import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import MainComponent from '../lib/Main.svelte'

vi.mock('../lib/nbsp.ts', () => ({
  applyNbsp: vi.fn(() => 'formatted&nbsp;text'),
}))

vi.stubEnv('VITE_FACEBOOK', 'https://facebook.com/test')
vi.stubEnv('VITE_INSTAGRAM', 'https://instagram.com/test')
vi.stubEnv('VITE_LINKEDIN', 'https://linkedin.com/test')
vi.stubEnv('VITE_MACMEETING', 'https://example.com/mac')
vi.stubEnv('VITE_MAIL', 'test@example.com')

describe('MainComponent', () => {
  it('renders formatted text using applyNbsp()', () => {
    render(MainComponent)

    const paragraph = screen.getByText((content) =>
      content.replace(/\u00A0/g, ' ').includes('formatted text')
    )

    expect(paragraph).toBeInTheDocument()
  })

  it('renders SocialMedia child component', () => {
    render(MainComponent)

    const socialIcons = screen.getAllByRole('link')
    expect(socialIcons.length).toBeGreaterThan(0)
  })

  it('opens mailto link on button click', async () => {
    delete (window as any).location
    ;(window as any).location = { href: '' }

    render(MainComponent)

    const button = screen.getByRole('button', { name: /Dołącz do nas!/i })
    await fireEvent.click(button)

    expect(window.location.href).toBe('mailto:test@example.com')
  })

  it('uses default URLs when env vars are not provided', () => {
    vi.stubEnv('VITE_FACEBOOK', undefined)
    vi.stubEnv('VITE_INSTAGRAM', undefined)
    vi.stubEnv('VITE_LINKEDIN', undefined)
    vi.stubEnv('VITE_MACMEETING', undefined)
    vi.stubEnv('VITE_MAIL', undefined)

    render(MainComponent)

    const links = screen.getAllByRole('link')

    expect(links[0]).toHaveAttribute('href', 'https://facebook.com/koloMAD')
    expect(links[1]).toHaveAttribute('href', 'https://instagram.com/koloMAD')
    expect(links[2]).toHaveAttribute('href', 'https://linkedin.com/company/koloMAD')
  })
})
