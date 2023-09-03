import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { ButtonGroup } from './button-group.component'

describe('ButtonGroup', () => {
  test('Should render slot', () => {
    const buttonGroup = ButtonGroup({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(buttonGroup, document.body)

    expect(
      document.body.querySelector('.nui-button-group')?.outerHTML,
    )?.toContain('Hello world')
  })

  test('Should have no axe violations', async () => {
    const buttonGroup = ButtonGroup({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(buttonGroup, document.body)

    expect(
      await axe(document.body.querySelector('.nui-button-group')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
