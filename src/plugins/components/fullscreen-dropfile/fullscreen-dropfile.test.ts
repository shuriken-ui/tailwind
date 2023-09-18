import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { FullscreenDropfile } from './fullscreen-dropfile.component'

describe('FullscreenDropfile', () => {
  test('Should have no axe violations', async () => {
    const dropfile = FullscreenDropfile({
      label: 'Fullscreen Dropfile',
    })

    render(dropfile, document.body)

    expect(
      await axe(
        document.body.querySelector('.nui-fullscreen-dropfile')!.outerHTML,
      ),
    )?.toHaveNoViolations()
  })
})
