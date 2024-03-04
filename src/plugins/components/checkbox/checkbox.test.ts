import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Checkbox } from './checkbox.component'

describe('Checkbox', () => {
  test('Should have no axe violations', async () => {
    const input = Checkbox({
      label: 'Checkbox',
      rounded: 'sm',
      id: 'checkbox',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-checkbox')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
