import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Radio } from './radio.component'

describe('Radio', () => {
  test('Should have no axe violations', async () => {
    const input = Radio({
      label: 'Radio',
      id: 'radio',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-radio')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
