import { render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Header from '../lib/Header.svelte'

describe('Header', () => {
  it('renders main title and subtitle correctly', () => {
    render(Header)

    const title = screen.getByRole('heading', { level: 1, name: /Koło Naukowe MAD/i })
    expect(title).toBeInTheDocument()

    const subtitle = screen.getByRole('heading', {
      level: 2,
      name: /przy Uniwersytecie WSB Merito we Wrocławiu/i,
    })
    expect(subtitle).toBeInTheDocument()
  })
})
