import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { ButtonClose } from './button-close.component'

describe('ButtonClose', () => {
  test('Should have no axe violations', async () => {
    const buttonClose = ButtonClose({})

    render(buttonClose, document.body)

    expect(
      await axe(document.body.querySelector('.nui-button-close')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
