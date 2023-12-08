import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { MessageAttrs } from './message.types'
import { Message } from './message.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Message',
  // tags: ['autodocs'],
  render: (args) => Message(args),
  argTypes: {
    message: {
      control: { type: 'text' },
      defaultValue: 'Some nice message text',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'muted',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
      defaultValue: 'default',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'sm',
    },
    closable: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<MessageAttrs>

export default meta
type Story = StoryObj<MessageAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    type: 'default',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'max-width: 280px;',
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    type: 'default',
    rounded: 'none',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    type: 'default',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    type: 'default',
    rounded: 'md',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    type: 'default',
    rounded: 'lg',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const Full: Story = {
  name: 'Rounded: full',
  args: {
    type: 'default',
    rounded: 'full',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}
// #endregion

// #region Types
export const TypeDefault: Story = {
  name: 'Type: default',
  args: {
    type: 'default',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const TypeMuted: Story = {
  name: 'Type: muted',
  args: {
    type: 'muted',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const TypePrimary: Story = {
  name: 'Type: primary',
  args: {
    type: 'primary',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const TypeInfo: Story = {
  name: 'Type: info',
  args: {
    type: 'info',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const TypeSuccess: Story = {
  name: 'Type: success',
  args: {
    type: 'success',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const TypeWarning: Story = {
  name: 'Type: warning',
  args: {
    type: 'warning',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const TypeDanger: Story = {
  name: 'Type: danger',
  args: {
    type: 'danger',
    rounded: 'sm',
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}
// #endregion

// #region Closable
export const ClosableDefault: Story = {
  name: 'Closable: default',
  args: {
    type: 'default',
    rounded: 'sm',
    closable: true,
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const ClosablePrimary: Story = {
  name: 'Closable: primary',
  args: {
    type: 'primary',
    rounded: 'sm',
    closable: true,
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const ClosableInfo: Story = {
  name: 'Closable: info',
  args: {
    type: 'info',
    rounded: 'sm',
    closable: true,
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}
// #endregion

// #region Slot: icon
export const SlotIconInfo: Story = {
  name: 'Slot icon: info',
  args: {
    type: 'info',
    rounded: 'sm',
    closable: true,
    icon: html`
      <svg
        class="nui-message-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
          clip-rule="evenodd"
        />
      </svg>
    `,
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const SlotIconSuccess: Story = {
  name: 'Slot icon: success',
  args: {
    type: 'success',
    rounded: 'lg',
    closable: true,
    icon: html`
      <svg
        class="nui-message-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
        />
        <path
          fill="none"
          d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
        />
      </svg>
    `,
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}

export const SlotIconWarning: Story = {
  name: 'Slot icon: warning',
  args: {
    type: 'warning',
    icon: html`
      <svg
        class="nui-message-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="m227.31 80.23l-51.54-51.54A16.13 16.13 0 0 0 164.45 24h-72.9a16.13 16.13 0 0 0-11.32 4.69L28.69 80.23A16.13 16.13 0 0 0 24 91.55v72.9a16.13 16.13 0 0 0 4.69 11.32l51.54 51.54A16.13 16.13 0 0 0 91.55 232h72.9a16.13 16.13 0 0 0 11.32-4.69l51.54-51.54a16.13 16.13 0 0 0 4.69-11.32v-72.9a16.13 16.13 0 0 0-4.69-11.32ZM120 80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm8 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
        />
      </svg>
    `,
    rounded: 'full',
    closable: true,
    message: 'Some nice message text',
    style: 'min-width: 280px; max-width: 280px;',
  },
}
// #endregion
