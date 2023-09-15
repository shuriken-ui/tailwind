import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Snack } from './snack.component'

describe('Snack', () => {
  test('Should have no axe violations', async () => {
    const snack = Snack({})

    render(snack, document.body)

    expect(
      await axe(document.body.querySelector('.nui-snack')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
