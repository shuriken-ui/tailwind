import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Select } from './select.component'

describe('Select', () => {
  test('Should have no axe violations', async () => {
    const select = Select({
      label: 'Select',
      rounded: 'sm',
      type: 'text',
      id: 'select',
      placeholder: 'Write something...',
    })

    render(select, document.body)

    expect(
      await axe(document.body.querySelector('.nui-select-wrapper')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
