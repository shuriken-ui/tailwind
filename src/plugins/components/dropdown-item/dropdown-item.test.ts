import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { DropdownItem } from './dropdown-item.component'

describe('Dropdown', () => {
  test('Should have no axe violations', async () => {
    const dropdown = DropdownItem({
      href: '#',
      title: 'Title',
      text: 'Dropdown item text',
    })

    render(dropdown, document.body)

    expect(
      await axe(document.body.querySelector('.nui-dropdown-item')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
