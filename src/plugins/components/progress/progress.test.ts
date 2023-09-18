import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Progress } from './progress.component'

describe('Progress', () => {
  test('Should have no axe violations', async () => {
    const progress = Progress({
      value: 50,
    })

    render(progress, document.body)

    expect(
      await axe(document.body.querySelector('.nui-progress')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
