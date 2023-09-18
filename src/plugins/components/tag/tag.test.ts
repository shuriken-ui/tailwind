import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Tag } from './tag.component'

describe('Tag', () => {
  test('Should have no axe violations', async () => {
    const input = Tag({
      children: html`
        Hello World
      `,
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-radio')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
