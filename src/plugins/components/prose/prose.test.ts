import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Prose } from './prose.component'

describe('Prose', () => {
  test('Should have no axe violations', async () => {
    const prose = Prose({
      children: html`
        Hello World
      `,
    })

    render(prose, document.body)

    expect(
      await axe(document.body.querySelector('.nui-prose')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
