import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { ThemeToggle } from './theme-toggle.component'

describe('ThemeToggle', () => {
  test('Should have no axe violations', async () => {
    const textarea = ThemeToggle({})

    render(textarea, document.body)

    expect(
      await axe(document.body.querySelector('.nui-theme-toggle')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
