import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { TabSlider } from './tab-slider.component'

const data = [
  { label: 'Team', value: 'team' },
  { label: 'Projects', value: 'projects' },
]

describe('TabSlider', () => {
  test('Should have no axe violations', async () => {
    const tabs = TabSlider({
      tabs: data,
      children: html`
        Hello World
      `,
    })

    render(tabs, document.body)

    expect(
      await axe(document.body.querySelector('.nui-tab-slider')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
