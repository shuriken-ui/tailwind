import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Avatar } from './avatar.component'

describe('Avatar', () => {
  test('Should render slot', () => {
    const avatar = Avatar({
      src: 'https://apollux.cssninja.io/img/avatars/10.svg',
      srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
    })

    render(avatar, document.body)

    expect(document.body.querySelector('.nui-avatar')?.outerHTML)?.toContain(
      'img',
    )
  })

  test('Should have no axe violations', async () => {
    const avatar = Avatar({
      src: 'https://apollux.cssninja.io/img/avatars/10.svg',
      srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
    })

    render(avatar, document.body)

    expect(
      await axe(document.body.querySelector('.nui-avatar')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
