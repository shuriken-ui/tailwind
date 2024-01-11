import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { TextareaAttrs } from './textarea.types'
import { Textarea } from './textarea.component'
import { Avatar } from '../avatar/avatar.component'
import { Button } from '../button/button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Textarea',
  // tags: ['autodocs'],
  render: (args) => Textarea(args),
  argTypes: {
    id: {
      name: 'id',
      control: { type: 'text' },
      defaultValue: '',
    },
    label: {
      name: 'label',
      control: { type: 'text' },
      defaultValue: '',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'sm',
    },
    contrast: {
      control: { type: 'select' },
      options: ['default', 'default-contrast', 'muted', 'muted-contrast'],
      defaultValue: 'default',
    },
    labelFloat: {
      name: 'Floating label',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    colorFocus: {
      name: 'color focus',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    loading: {
      name: 'loading',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    '?disabled': {
      name: 'disabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    error: {
      name: 'error',
      control: { type: 'text' },
      defaultValue: '',
    },
  },
} satisfies Meta<TextareaAttrs>

export default meta
type Story = StoryObj<TextareaAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    id: 'textarea',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[340px] max-w-[340px]',
    },
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'none',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'md',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'lg',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[320px] max-w-[320px]',
    },
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region Contrast: muted
export const ContrastMutedSm: Story = {
  name: 'Contrast muted: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'sm',
    contrast: 'muted',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ContrastMutedMd: Story = {
  name: 'Contrast muted: md',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'muted',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ContrastMutedLg: Story = {
  name: 'Contrast muted: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'lg',
    contrast: 'muted',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region Label float
export const LabelFloatSm: Story = {
  name: 'Label float: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    labelFloat: true,
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LabelFloatMd: Story = {
  name: 'Label float: md',
  args: {
    id: 'textarea',
    label: 'Message',
    labelFloat: true,
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LabelFloatLg: Story = {
  name: 'Label float: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    labelFloat: true,
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: color focus
export const ColorFocusSm: Story = {
  name: 'Color focus: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    colorFocus: true,
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusMd: Story = {
  name: 'Color focus: md',
  args: {
    id: 'textarea',
    label: 'Message',
    colorFocus: true,
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusLg: Story = {
  name: 'Color focus: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    colorFocus: true,
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: disabled
export const DisabledSm: Story = {
  name: 'Disabled: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    '?disabled': true,
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledMd: Story = {
  name: 'Disabled: md',
  args: {
    id: 'textarea',
    label: 'Message',
    '?disabled': true,
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledLg: Story = {
  name: 'Disabled: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    '?disabled': true,
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: loading
export const LoadingSm: Story = {
  name: 'Loading: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    loading: true,
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    rows: '4',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingMd: Story = {
  name: 'Loading: md',
  args: {
    id: 'textarea',
    label: 'Message',
    loading: true,
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    rows: '4',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingLg: Story = {
  name: 'Loading: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    loading: true,
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    rows: '4',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: error
export const ErrorSm: Story = {
  name: 'Error: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    error: 'Please enter a valid value',
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorMd: Story = {
  name: 'Error: md',
  args: {
    id: 'textarea',
    label: 'Message',
    error: 'Please enter a valid value',
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorLg: Story = {
  name: 'Error: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    error: 'Please enter a valid value',
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region State: No resize
export const NoResizeSm: Story = {
  name: 'No resize: sm',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'sm',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    resize: false,
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const NoResizeMd: Story = {
  name: 'No resize: md',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    resize: false,
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const NoResizeLg: Story = {
  name: 'No resize: lg',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'lg',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    resize: false,
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region Slot: addon
export const Addon: Story = {
  name: 'Textarea addon',
  args: {
    id: 'textarea',
    label: 'Message',
    size: 'md',
    contrast: 'default',
    rounded: 'sm',
    placeholder: 'Write a message...',
    addon: html`
      <div class="flex items-center gap-2">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/10.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
          size: 'xs',
        })}
        <h4
          class="nui-heading nui-heading-sm nui-weight-semibold nui-lead-normal text-muted-800 dark:text-white"
        >
          Maya
        </h4>
      </div>
      <div class="flex items-center gap-2">
        ${Button({
          rounded: 'sm',
          size: 'sm',
          children: html`
            <span>Post Comment</span>
          `,
        })}
      </div>
    `,
    rows: '6',
    classes: {
      wrapper: 'min-w-[380px] max-w-[380px]',
    },
  },
}
// #endregion
