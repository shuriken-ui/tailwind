import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Listbox } from './listbox.component'

describe('Listbox', () => {
  test('Should have no axe violations', async () => {
    const input = Listbox({
      label: 'Listbox',
      rounded: 'sm',
      id: 'listbox',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-listbox')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
