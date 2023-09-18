import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { InputFile } from './input-file.component'

describe('InputFile', () => {
  test('Should have no axe violations', async () => {
    const input = InputFile({})

    render(input, document.body)

    expect(
      await axe(document.body.querySelector('.nui-input-file')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
