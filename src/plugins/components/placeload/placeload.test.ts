import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Placeload } from './placeload.component'

describe('Placeload', () => {
  test('Should have no axe violations', async () => {
    const label = Placeload({})

    render(label, document.body)

    expect(
      await axe(document.body.querySelector('.nui-placeload')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
