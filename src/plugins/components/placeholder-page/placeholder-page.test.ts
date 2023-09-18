import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { PlaceholderPage } from './placeholder-page.component'

describe('PlaceholderPage', () => {
  test('Should have no axe violations', async () => {
    const placeholder = PlaceholderPage({
      title: 'Hello World',
      subtitle: 'Hello World',
    })

    render(placeholder, document.body)

    expect(
      await axe(
        document.body.querySelector('.nui-placeholder-page')!.outerHTML,
      ),
    )?.toHaveNoViolations()
  })
})
