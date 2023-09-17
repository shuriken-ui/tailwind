import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { MessageText } from './message-text.component'

describe('MessageText', () => {
  test('Should have no axe violations', async () => {
    const label = MessageText({
      title: 'Hello World',
    })

    render(label, document.body)

    expect(
      await axe(document.body.querySelector('.nui-message-text')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
