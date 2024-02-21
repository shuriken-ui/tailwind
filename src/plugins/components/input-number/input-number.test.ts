import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { InputNumber } from './input-number.component'

describe('Input', () => {
  test('Should have no axe violations', async () => {
    const input = InputNumber({
      label: 'Input',
      rounded: 'sm',
      type: 'text',
      id: 'input',
      placeholder: 'Write something...',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-input-wrapper')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
