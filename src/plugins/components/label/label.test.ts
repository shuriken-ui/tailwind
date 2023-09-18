import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Label } from './label.component'

describe('Label', () => {
  test('Should have no axe violations', async () => {
    const label = Label({
      children: html`
        Hello World
      `,
    })

    render(label, document.body)

    expect(
      await axe(document.body.querySelector('.nui-label')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
