import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { AvatarAttrs } from './avatar.types'
import { Avatar } from './avatar.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Avatar',
  // tags: ['autodocs'],
  render: (args) => Avatar(args),
  argTypes: {
    src: {
      control: { type: 'text' },
      defaultValue: 'https://apollux.cssninja.io/img/avatars/10.svg',
    },
    srcDark: {
      control: { type: 'text' },
      defaultValue: 'https://apollux.cssninja.io/img/avatars/10.svg',
    },
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      defaultValue: 'sm',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'full',
    },
    color: {
      control: { type: 'select' },
      options: [
        'white',
        'muted',
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'pink',
        'yellow',
        'indigo',
        'violet',
      ],
      defaultValue: '',
    },
    mask: {
      control: { type: 'select' },
      options: ['hex', 'hexed', 'deca', 'blob', 'diamond'],
      defaultValue: '',
    },
    dot: {
      control: { type: 'select' },
      options: [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'pink',
        'yellow',
      ],
      defaultValue: '',
    },
    ring: {
      control: { type: 'select' },
      options: [
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'pink',
        'yellow',
      ],
      defaultValue: '',
    },
    text: {
      control: { type: 'text' },
      defaultValue: '?',
    },
  },
} satisfies Meta<AvatarAttrs>

export default meta
type Story = StoryObj<AvatarAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    size: '4xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
  },
}
// #endregion

// #region Size:full
export const SizeXxsFull: Story = {
  name: 'Size:xxs, Rounded:full',
  args: {
    size: 'xxs',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
  },
}

export const SizeXsFull: Story = {
  name: 'Size:xs, Rounded:full',
  args: {
    size: 'xs',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
  },
}

export const SizeSmFull: Story = {
  name: 'Size:sm, Rounded:full',
  args: {
    size: 'sm',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
  },
}

export const SizeMdFull: Story = {
  name: 'Size:md, Rounded:full',
  args: {
    size: 'md',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
  },
}

export const SizeLgFull: Story = {
  name: 'Size:lg, Rounded:full',
  args: {
    size: 'lg',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
  },
}

export const SizeXlFull: Story = {
  name: 'Size:xl, Rounded:full',
  args: {
    size: 'xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
  },
}

export const Size2XlFull: Story = {
  name: 'Size:2xl, Rounded:full',
  args: {
    size: '2xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
  },
}

export const Size3XlFull: Story = {
  name: 'Size:3xl, Rounded:full',
  args: {
    size: '3xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
  },
}

export const Size4XlFull: Story = {
  name: 'Size:4xl, Rounded:full',
  args: {
    size: '4xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
  },
}
// #endregion

// #region Size:rounded-lg
export const SizeXxsRoundedLg: Story = {
  name: 'Size:xxs, Rounded:lg',
  args: {
    size: 'xxs',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
  },
}

export const SizeXsRoundedLg: Story = {
  name: 'Size:xs, Rounded:lg',
  args: {
    size: 'xs',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
  },
}

export const SizeSmRoundedLg: Story = {
  name: 'Size:sm, Rounded:lg',
  args: {
    size: 'sm',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
  },
}

export const SizeMdRoundedLg: Story = {
  name: 'Size:md, Rounded:lg',
  args: {
    size: 'md',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
  },
}

export const SizeLgRoundedLg: Story = {
  name: 'Size:lg, Rounded:lg',
  args: {
    size: 'lg',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
  },
}

export const SizeXlRoundedLg: Story = {
  name: 'Size:xl, Rounded:lg',
  args: {
    size: 'xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
  },
}

export const Size2XlRoundedLg: Story = {
  name: 'Size:2xl, Rounded:lg',
  args: {
    size: '2xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
  },
}

export const Size3XlRoundedLg: Story = {
  name: 'Size:3xl, Rounded:lg',
  args: {
    size: '3xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
  },
}

export const Size4XlRoundedLg: Story = {
  name: 'Size:4xl, Rounded:lg',
  args: {
    size: '4xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
  },
}
// #endregion

// #region Size:rounded-md
export const SizeXxsRoundedMd: Story = {
  name: 'Size:xxs, Rounded:md',
  args: {
    size: 'xxs',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
  },
}

export const SizeXsRoundedMd: Story = {
  name: 'Size:xs, Rounded:md',
  args: {
    size: 'xs',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
  },
}

export const SizeSmRoundedMd: Story = {
  name: 'Size:sm, Rounded:md',
  args: {
    size: 'sm',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
  },
}

export const SizeMdRoundedMd: Story = {
  name: 'Size:md, Rounded:md',
  args: {
    size: 'md',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
  },
}

export const SizeLgRoundedMd: Story = {
  name: 'Size:lg, Rounded:md',
  args: {
    size: 'lg',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
  },
}

export const SizeXlRoundedMd: Story = {
  name: 'Size:xl, Rounded:md',
  args: {
    size: 'xl',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
  },
}

export const Size2XlRoundedMd: Story = {
  name: 'Size:2xl, Rounded:md',
  args: {
    size: '2xl',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
  },
}

export const Size3XlRoundedMd: Story = {
  name: 'Size:3xl, Rounded:md',
  args: {
    size: '3xl',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
  },
}

export const Size4XlRoundedMd: Story = {
  name: 'Size:4xl, Rounded:md',
  args: {
    size: '4xl',
    rounded: 'md',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
  },
}
// #endregion

// #region Dot:full
export const DotXxsFull: Story = {
  name: 'Dot:xxs, Rounded:full',
  args: {
    size: 'xxs',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
    dot: 'success',
  },
}

export const DotXsFull: Story = {
  name: 'Dot:xs, Rounded:full',
  args: {
    size: 'xs',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
    dot: 'info',
  },
}

export const DotSmFull: Story = {
  name: 'Dot:sm, Rounded:full',
  args: {
    size: 'sm',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
    dot: 'warning',
  },
}

export const DotMdFull: Story = {
  name: 'Dot:md, Rounded:full',
  args: {
    size: 'md',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
    dot: 'pink',
  },
}

export const DotLgFull: Story = {
  name: 'Dot:lg, Rounded:full',
  args: {
    size: 'lg',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
    dot: 'danger',
  },
}

export const DotXlFull: Story = {
  name: 'Dot:xl, Rounded:full',
  args: {
    size: 'xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
    dot: 'warning',
  },
}

export const Dot2XlFull: Story = {
  name: 'Dot:2xl, Rounded:full',
  args: {
    size: '2xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
    dot: 'info',
  },
}

export const Dot3XlFull: Story = {
  name: 'Dot:3xl, Rounded:full',
  args: {
    size: '3xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
    dot: 'success',
  },
}

export const Dot4XlFull: Story = {
  name: 'Dot:4xl, Rounded:full',
  args: {
    size: '4xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
    dot: 'primary',
  },
}
// #endregion

// #region Dot:curved
export const DotXxsRoundedLg: Story = {
  name: 'Dot:xxs, Rounded:lg',
  args: {
    size: 'xxs',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
    dot: 'success',
  },
}

export const DotXsRoundedLg: Story = {
  name: 'Dot:xs, Rounded:lg',
  args: {
    size: 'xs',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
    dot: 'info',
  },
}

export const DotSmRoundedLg: Story = {
  name: 'Dot:sm, Rounded:lg',
  args: {
    size: 'sm',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
    dot: 'warning',
  },
}

export const DotMdRoundedLg: Story = {
  name: 'Dot:md, Rounded:lg',
  args: {
    size: 'md',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
    dot: 'pink',
  },
}

export const DotLgRoundedLg: Story = {
  name: 'Dot:lg, Rounded:lg',
  args: {
    size: 'lg',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
    dot: 'danger',
  },
}

export const DotXlRoundedLg: Story = {
  name: 'Dot:xl, Rounded:lg',
  args: {
    size: 'xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
    dot: 'warning',
  },
}

export const Dot2XlRoundedLg: Story = {
  name: 'Dot:2xl, Rounded:lg',
  args: {
    size: '2xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
    dot: 'info',
  },
}

export const Dot3XlRoundedLg: Story = {
  name: 'Dot:3xl, Rounded:lg',
  args: {
    size: '3xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
    dot: 'success',
  },
}

export const Dot4XlRoundedLg: Story = {
  name: 'Dot:4xl, Rounded:lg',
  args: {
    size: '4xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
    dot: 'primary',
  },
}
// #endregion

// #region Badge:full
export const BadgeXxsFull: Story = {
  name: 'Badge:xxs, Rounded:full',
  args: {
    size: 'xxs',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeXsFull: Story = {
  name: 'Badge:xs, Rounded:full',
  args: {
    size: 'xs',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeSmFull: Story = {
  name: 'Badge:sm, Rounded:full',
  args: {
    size: 'sm',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeMdFull: Story = {
  name: 'Badge:md, Rounded:full',
  args: {
    size: 'md',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeLgFull: Story = {
  name: 'Badge:lg, Rounded:full',
  args: {
    size: 'lg',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeXlFull: Story = {
  name: 'Badge:xl, Rounded:full',
  args: {
    size: 'xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Badge2XlFull: Story = {
  name: 'Badge:2xl, Rounded:full',
  args: {
    size: '2xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Badge3XlFull: Story = {
  name: 'Badge:3xl, Rounded:full',
  args: {
    size: '3xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Badge4XlFull: Story = {
  name: 'Badge:4xl, Rounded:full',
  args: {
    size: '4xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}
// #endregion

// #region Badge:curved
export const BadgeXxsRoundedLg: Story = {
  name: 'Badge:xxs, Rounded:lg',
  args: {
    size: 'xxs',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/1.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/1.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeXsRoundedLg: Story = {
  name: 'Badge:xs, Rounded:lg',
  args: {
    size: 'xs',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/15.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeSmRoundedLg: Story = {
  name: 'Badge:sm, Rounded:lg',
  args: {
    size: 'sm',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/24.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeMdRoundedLg: Story = {
  name: 'Badge:md, Rounded:lg',
  args: {
    size: 'md',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/3.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/3.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeLgRoundedLg: Story = {
  name: 'Badge:lg, Rounded:lg',
  args: {
    size: 'lg',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const BadgeXlRoundedLg: Story = {
  name: 'Badge:xl, Rounded:lg',
  args: {
    size: 'xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Badge2XlRoundedLg: Story = {
  name: 'Badge:2xl, Rounded:lg',
  args: {
    size: '2xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Badge3XlRoundedLg: Story = {
  name: 'Badge:3xl, Rounded:lg',
  args: {
    size: '3xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Badge4XlRoundedLg: Story = {
  name: 'Badge:4xl, Rounded:lg',
  args: {
    size: '4xl',
    rounded: 'lg',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}
// #endregion

// #region Size:full:fake
export const SizeXxsFullFake: Story = {
  name: 'Fake, Size:xxs, Rounded:full',
  args: {
    size: 'xxs',
    rounded: 'full',
    text: 'T',
    color: 'primary',
  },
}

export const SizeXsFullFake: Story = {
  name: 'Fake, Size:xs, Rounded:full',
  args: {
    size: 'xs',
    rounded: 'full',
    text: 'T',
    color: 'info',
  },
}

export const SizeSmFullFake: Story = {
  name: 'Fake, Size:sm, Rounded:full',
  args: {
    size: 'sm',
    rounded: 'full',
    text: 'T',
    color: 'success',
  },
}

export const SizeMdFullFake: Story = {
  name: 'Fake, Size:md, Rounded:full',
  args: {
    size: 'md',
    rounded: 'full',
    text: 'T',
    color: 'warning',
  },
}

export const SizeLgFullFake: Story = {
  name: 'Fake, Size:lg, Rounded:full',
  args: {
    size: 'lg',
    rounded: 'full',
    text: 'T',
    color: 'danger',
  },
}

export const SizeXlFullFake: Story = {
  name: 'Fake, Size:xl, Rounded:full',
  args: {
    size: 'xl',
    rounded: 'full',
    text: 'T',
    color: 'indigo',
  },
}

export const Size2XlFullFake: Story = {
  name: 'Fake, Size:2xl, Rounded:full',
  args: {
    size: '2xl',
    rounded: 'full',
    text: 'T',
    color: 'yellow',
  },
}

export const Size3XlFullFake: Story = {
  name: 'Fake, Size:3xl, Rounded:full',
  args: {
    size: '3xl',
    rounded: 'full',
    text: 'T',
    color: 'pink',
  },
}

export const Size4XlFullFake: Story = {
  name: 'Fake, Size:4xl, Rounded:full',
  args: {
    size: '4xl',
    rounded: 'full',
    text: 'T',
    color: 'primary',
  },
}
// #endregion

// #region Size:rounded-lg:fake
export const SizeXxsRoundedLgFake: Story = {
  name: 'Fake, Size:xxs, Rounded:lg',
  args: {
    size: 'xxs',
    rounded: 'lg',
    text: 'T',
    color: 'primary',
  },
}

export const SizeXsRoundedLgFake: Story = {
  name: 'Fake, Size:xs, Rounded:lg',
  args: {
    size: 'xs',
    rounded: 'lg',
    text: 'T',
    color: 'info',
  },
}

export const SizeSmRoundedLgFake: Story = {
  name: 'Fake, Size:sm, Rounded:lg',
  args: {
    size: 'sm',
    rounded: 'lg',
    text: 'T',
    color: 'success',
  },
}

export const SizeMdRoundedLgFake: Story = {
  name: 'Fake, Size:md, Rounded:lg',
  args: {
    size: 'md',
    rounded: 'lg',
    text: 'T',
    color: 'warning',
  },
}

export const SizeLgRoundedLgFake: Story = {
  name: 'Fake, Size:lg, Rounded:lg',
  args: {
    size: 'lg',
    rounded: 'lg',
    text: 'T',
    color: 'danger',
  },
}

export const SizeXlRoundedLgFake: Story = {
  name: 'Fake, Size:xl, Rounded:lg',
  args: {
    size: 'xl',
    rounded: 'lg',
    text: 'T',
    color: 'indigo',
  },
}

export const Size2XlRoundedLgFake: Story = {
  name: 'Fake, Size:2xl, Rounded:lg',
  args: {
    size: '2xl',
    rounded: 'lg',
    text: 'T',
    color: 'yellow',
  },
}

export const Size3XlRoundedLgFake: Story = {
  name: 'Fake, Size:3xl, Rounded:lg',
  args: {
    size: '3xl',
    rounded: 'lg',
    text: 'T',
    color: 'pink',
  },
}

export const Size4XlRoundedLgFake: Story = {
  name: 'Fake, Size:4xl, Rounded:lg',
  args: {
    size: '4xl',
    rounded: 'lg',
    text: 'T',
    color: 'primary',
  },
}
// #endregion

// #region Size:full:fake:badge
export const SizeXxsFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:xxs, Rounded:full',
  args: {
    size: 'xxs',
    rounded: 'full',
    text: 'T',
    color: 'primary',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeXsFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:xs, Rounded:full',
  args: {
    size: 'xs',
    rounded: 'full',
    text: 'T',
    color: 'info',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeSmFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:sm, Rounded:full',
  args: {
    size: 'sm',
    rounded: 'full',
    text: 'T',
    color: 'success',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeMdFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:md, Rounded:full',
  args: {
    size: 'md',
    rounded: 'full',
    text: 'T',
    color: 'warning',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeLgFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:lg, Rounded:full',
  args: {
    size: 'lg',
    rounded: 'full',
    text: 'T',
    color: 'danger',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeXlFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:xl, Rounded:full',
  args: {
    size: 'xl',
    rounded: 'full',
    text: 'T',
    color: 'indigo',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Size2XlFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:2xl, Rounded:full',
  args: {
    size: '2xl',
    rounded: 'full',
    text: 'T',
    color: 'yellow',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Size3XlFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:3xl, Rounded:full',
  args: {
    size: '3xl',
    rounded: 'full',
    text: 'T',
    color: 'pink',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Size4XlFullFakeBadge: Story = {
  name: 'Fake, Badge, Size:4xl, Rounded:full',
  args: {
    size: '4xl',
    rounded: 'full',
    text: 'T',
    color: 'primary',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}
// #endregion

// #region Size:rounded-lg:fake:badge
export const SizeXxsRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:xxs, Rounded:lg',
  args: {
    size: 'xxs',
    rounded: 'lg',
    text: 'T',
    color: 'primary',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeXsRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:xs, Rounded:lg',
  args: {
    size: 'xs',
    rounded: 'lg',
    text: 'T',
    color: 'info',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeSmRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:sm, Rounded:lg',
  args: {
    size: 'sm',
    rounded: 'lg',
    text: 'T',
    color: 'success',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeMdRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:md, Rounded:lg',
  args: {
    size: 'md',
    rounded: 'lg',
    text: 'T',
    color: 'warning',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeLgRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:lg, Rounded:lg',
  args: {
    size: 'lg',
    rounded: 'lg',
    text: 'T',
    color: 'danger',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const SizeXlRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:xl, Rounded:lg',
  args: {
    size: 'xl',
    rounded: 'lg',
    text: 'T',
    color: 'indigo',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Size2XlRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:2xl, Rounded:lg',
  args: {
    size: '2xl',
    rounded: 'lg',
    text: 'T',
    color: 'yellow',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Size3XlRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:3xl, Rounded:lg',
  args: {
    size: '3xl',
    rounded: 'lg',
    text: 'T',
    color: 'pink',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}

export const Size4XlRoundedLgFakeBadge: Story = {
  name: 'Fake, Badge, Size:4xl, Rounded:lg',
  args: {
    size: '4xl',
    rounded: 'lg',
    text: 'T',
    color: 'primary',
    badgeSrc:
      'https://tairo.cssninja.io/img/icons/flags/united-states-of-america.svg',
  },
}
// #endregion

// #region Masks
export const MaskHex: Story = {
  name: 'Mask: Hex',
  args: {
    size: 'xl',
    rounded: 'none',
    mask: 'hex',
    src: 'https://apollux.cssninja.io/img/avatars/8.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/8.svg',
  },
}

export const MaskHexed: Story = {
  name: 'Mask: Hexed',
  args: {
    size: 'xl',
    rounded: 'none',
    mask: 'hexed',
    src: 'https://apollux.cssninja.io/img/avatars/16.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/16.svg',
  },
}

export const MaskBlob: Story = {
  name: 'Mask: Blob',
  args: {
    size: 'xl',
    rounded: 'none',
    mask: 'blob',
    src: 'https://apollux.cssninja.io/img/avatars/12.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/12.svg',
  },
}

export const MaskDeca: Story = {
  name: 'Mask: Decagon',
  args: {
    size: 'xl',
    rounded: 'none',
    mask: 'deca',
    src: 'https://apollux.cssninja.io/img/avatars/2.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
  },
}

export const MaskDiamond: Story = {
  name: 'Mask: Diamond',
  args: {
    size: 'xl',
    rounded: 'none',
    mask: 'diamond',
    src: 'https://apollux.cssninja.io/img/avatars/10.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
  },
}
// #endregion

// #region Slot:default
export const SlotDefault: Story = {
  name: 'Default slot',
  args: {
    size: '2xl',
    rounded: 'none',
    children: html`
      <img
        src="https://apollux.cssninja.io/img/avatars/15.svg"
        class="w-24 h-24"
        style="clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"
        alt="Polygon slot"
      />
    `,
  },
}

export const SlotBadge: Story = {
  name: 'Badge slot',
  args: {
    size: '2xl',
    rounded: 'full',
    src: 'https://apollux.cssninja.io/img/avatars/20.svg',
    srcDark: 'https://apollux.cssninja.io/img/avatars/20.svg',
    badge: html`
      <div
        class="absolute top-0 end-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary-500 text-white border-4 border-muted-100 dark:border-muted-900"
      >
        <span class="font-sans text-xs font-medium">2</span>
      </div>
    `,
  },
}
// #endregion
