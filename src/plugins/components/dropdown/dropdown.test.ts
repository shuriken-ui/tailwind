import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Dropdown } from './dropdown.component'

describe('Dropdown', () => {
  test('Should have no axe violations', async () => {
    const dropdown = Dropdown({
      label: 'Dropdown',
      children: html``,
    })

    render(dropdown, document.body)

    expect(
      await axe(document.body.querySelector('.nui-dropdown')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
