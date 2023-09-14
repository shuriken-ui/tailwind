import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { ProgressCircle } from './progress-circle.component'

describe('ProgressCircle', () => {
  test('Should have no axe violations', async () => {
    const progress = ProgressCircle({
      value: 50,
    })

    render(progress, document.body)

    expect(
      await axe(document.body.querySelector('svg.block')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
