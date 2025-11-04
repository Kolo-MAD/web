import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Footer from '../lib/Footer.svelte'

describe('Footer', () => {
  it('should render footer with correct text', () => {
    render(Footer)

    const footer = screen.getByText(/Made with Svelte by philw\.dev/i)
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })
})
