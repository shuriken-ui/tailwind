import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Toast } from './toast.component'

describe('Toast', () => {
  test('Should have no axe violations', async () => {
    const label = Toast({
      title: 'Hello World',
      text: 'Action was a success!',
    })

    render(label, document.body)

    expect(
      await axe(document.body.querySelector('.nui-toast')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
