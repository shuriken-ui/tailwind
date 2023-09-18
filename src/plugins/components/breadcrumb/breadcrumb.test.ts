import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Breadcrumb } from './breadcrumb.component'

describe('Breadcrumb', () => {
  test('Should have no axe violations', async () => {
    const breadcrumb = Breadcrumb({})

    render(breadcrumb, document.body)

    expect(
      await axe(document.body.querySelector('.nui-breadcrumb')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
