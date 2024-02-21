import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Autocomplete } from './autocomplete.component'

describe('Autocomplete', () => {
  test('Should have no axe violations', async () => {
    const input = Autocomplete({
      label: 'Autocomplete',
      rounded: 'sm',
      id: 'autocomplete',
      placeholder: 'Search...',
    })

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-autocomplete')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
