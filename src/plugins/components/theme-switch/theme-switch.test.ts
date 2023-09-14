import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { ThemeSwitch } from './theme-switch.component'

describe('ThemeSwitch', () => {
  test('Should have no axe violations', async () => {
    const textarea = ThemeSwitch({})

    render(textarea, document.body)

    expect(
      await axe(document.body.querySelector('.nui-theme-switch')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
