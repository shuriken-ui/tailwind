import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { IconBox } from './icon-box.component'

describe('IconBox', () => {
  test('Should have no axe violations', async () => {
    const iconBox = IconBox({
      children: html`
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
        >
          <g fill="currentColor">
            <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
            <path
              d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
            />
          </g>
        </svg>
      `,
    })

    render(iconBox, document.body)

    expect(
      await axe(document.body.querySelector('.nui-icon-box')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
