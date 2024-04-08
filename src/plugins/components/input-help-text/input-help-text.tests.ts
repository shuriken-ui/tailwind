import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { InputHelpText } from './input-help-text.component'

describe('InputHelpText', () => {
  test('Should render slot', () => {
    const inputHelpText = InputHelpText({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(InputHelpText, document.body)

    expect(
      document.body.querySelector('.nui-input-help-text')?.outerHTML,
    )?.toContain('Hello world')
  })

  test('Should have no axe violations', async () => {
    const inputHelpText = InputHelpText({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(InputHelpText, document.body)

    expect(
      await axe(document.body.querySelector('.nui-input-help-text')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
