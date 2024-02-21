import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { InputFileRegular } from './input-file-regular.component'

describe('InputFileRegular', () => {
  test('Should have no axe violations', async () => {
    const input = InputFileRegular({
      label: 'File input',
      rounded: 'sm',
      id: 'input',
      placeholder: 'Upload files',
    })

    render(input, document.body)

    expect(
      await axe(
        document.body.querySelector('.nui-input-file-regular')!.outerHTML,
      ),
    )?.toHaveNoViolations()
  })
})
