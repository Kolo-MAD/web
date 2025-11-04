import { render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'
import Logo from '../lib/Logo.svelte'

vi.mock('/mad.svg', () => ({
  default: '/test-mad.svg',
}))

describe('Logo component', () => {
  it('renders the logo image with correct alt text', () => {
    render(Logo)

    const img = screen.getByRole('img', { name: /Mad Logo/i })

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/test-mad.svg')
    expect(img).toHaveClass('logo')
    expect(img).toHaveClass('svelte')
  })
})
