import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { DropdownDivider } from './dropdown-divider.component'

describe('DropdownDivider', () => {
  test('Should have no axe violations', async () => {
    const divider = DropdownDivider({})

    render(divider, document.body)

    expect(
      await axe(
        document.body.querySelector('.nui-dropdown-divider')!.outerHTML,
      ),
    )?.toHaveNoViolations()
  })
})
