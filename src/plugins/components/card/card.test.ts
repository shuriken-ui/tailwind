import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Card } from './card.component'

describe('Card', () => {
  test('Should render slot', () => {
    const card = Card({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(card, document.body)

    expect(document.body.querySelector('.nui-card')?.outerHTML)?.toContain(
      'Hello world',
    )
  })

  test('Should have no axe violations', async () => {
    const card = Card({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(card, document.body)

    expect(
      await axe(document.body.querySelector('.nui-card')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
