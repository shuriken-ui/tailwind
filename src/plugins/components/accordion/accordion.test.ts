import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Accordion } from './accordion.component'

describe('Accordion', () => {
  test('Should have no axe violations', async () => {
    const accordion = Accordion({
      items: [
        {
          title: 'Accordion Item 1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
        },
        {
          title: 'Accordion Item 2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
        },
        {
          title: 'Accordion Item 3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
        },
      ],
    })

    render(accordion, document.body)

    expect(
      await axe(document.body.querySelector('.nui-accordion')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
