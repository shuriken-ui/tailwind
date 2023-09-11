import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { SwitchThin } from './switch-thin.component'

describe('SwitchThin', () => {
  test('Should have no axe violations', async () => {
    const switchThin = SwitchThin({
      label: 'SwitchThin',
      id: 'switch-thin',
    })

    render(switchThin, document.body)

    expect(
      await axe(document.body.querySelector('.nui-switch-thin')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
