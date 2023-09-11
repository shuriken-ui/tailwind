import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { SwitchBall } from './switch-ball.component'

describe('SwitchBall', () => {
  test('Should have no axe violations', async () => {
    const switchBall = SwitchBall({
      label: 'SwitchBall',
      id: 'switch-ball',
    })

    render(switchBall, document.body)

    expect(
      await axe(document.body.querySelector('.nui-switch-ball')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
