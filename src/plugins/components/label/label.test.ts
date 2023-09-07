import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Label } from './label.component'

describe('Label', () => {
  test('Should have no axe violations', async () => {
    const iconBox = Label({
      children: html`
        Hello World
      `,
    })

    render(iconBox, document.body)

    expect(
      await axe(document.body.querySelector('.nui-label')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
