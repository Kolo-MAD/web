import { describe, expect, it } from 'vitest'
import { applyNbsp } from '../lib/nbsp'

describe('applyNbsp', () => {
  it('replaces space after single-letter words with nbsp', () => {
    const text = 'Idę w stronę słońca'
    const result = applyNbsp(text)

    expect(result).toBe(`Idę w\u00A0stronę słońca`)
  })

  it('replaces multiple matches inside a sentence', () => {
    const text = 'Wyszedłem z domu i poszedłem do sklepu'
    const result = applyNbsp(text)

    expect(result).toBe(`Wyszedłem z\u00A0domu i\u00A0poszedłem do\u00A0sklepu`)
  })

  it('does NOT modify text when rule does not apply', () => {
    const text = 'To jest test bez potrzeby modyfikacji'
    const result = applyNbsp(text)

    expect(result).toBe(text)
  })

  it('is case insensitive', () => {
    const text = 'Wyszliśmy Na spacer'
    const result = applyNbsp(text)

    expect(result).toBe(`Wyszliśmy Na\u00A0spacer`)
  })
})
