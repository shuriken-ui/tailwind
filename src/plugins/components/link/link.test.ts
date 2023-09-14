import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Link } from './link.component'

describe('Link', () => {
  test('Should have no axe violations', async () => {
    const link = Link({
      href: '#',
      children: html`
        Hello World
      `,
    })

    render(link, document.body)

    expect(
      await axe(document.body.querySelector('.nui-label')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
