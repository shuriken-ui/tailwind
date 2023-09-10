import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Text } from './text.component'

describe('Text', () => {
  test('Should render slot', () => {
    const text = Text({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(text, document.body)

    expect(document.body.querySelector('.nui-text')?.outerHTML)?.toContain(
      'Hello world',
    )
  })

  test('Should have no axe violations', async () => {
    const text = Text({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(text, document.body)

    expect(
      await axe(document.body.querySelector('.nui-text')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
