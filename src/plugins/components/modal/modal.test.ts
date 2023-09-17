import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Modal } from './modal.component'

describe('Modal', () => {
  test('Should have no axe violations', async () => {
    const modal = Modal({
      open: true,
      children: html`
        Hello World
      `,
    })

    render(modal, document.body)

    expect(
      await axe(document.body.querySelector('.nui-modal')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
