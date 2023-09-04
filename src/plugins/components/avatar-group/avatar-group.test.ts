import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { AvatarGroup } from './avatar-group.component'

describe('AvatarGroup', () => {
  test('Should render slot', () => {
    const avatarGroup = AvatarGroup({
      size: 'sm',
      avatars: [],
    })

    render(avatarGroup, document.body)

    expect(
      document.body.querySelector('.nui-avatar-group')?.outerHTML,
    )?.toContain('Hello world')
  })

  test('Should have no axe violations', async () => {
    const avatarGroup = AvatarGroup({
      size: 'sm',
      avatars: [],
    })

    render(avatarGroup, document.body)

    expect(
      await axe(document.body.querySelector('.nui-avatar-group')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
