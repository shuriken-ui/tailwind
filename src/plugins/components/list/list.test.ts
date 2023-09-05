import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { List } from './list.component'

describe('List', () => {
  test('Should render slot', () => {
    const list = List({
      children: html`
        <li>Hello world</li>
      `,
    })

    render(list, document.body)

    expect(document.body.querySelector('.nui-list')?.outerHTML)?.toContain(
      'Hello world',
    )
  })

  test('Should have no axe violations', async () => {
    const list = List({
      children: html`
        <li>Hello world</li>
      `,
    })

    render(list, document.body)

    expect(
      await axe(document.body.querySelector('.nui-list')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
