import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Tabs } from './tabs.component'

const data = [
  { label: 'Team', value: 'team' },
  { label: 'Projects', value: 'projects' },
]

describe('Tabs', () => {
  test('Should have no axe violations', async () => {
    const tabs = Tabs({
      tabs: data,
      children: html`
        Hello World
      `,
    })

    render(tabs, document.body)

    expect(
      await axe(document.body.querySelector('.nui-tabs')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
