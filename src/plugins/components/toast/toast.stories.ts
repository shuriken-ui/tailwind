import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ToastAttrs } from './toast.types'
import { Toast } from './toast.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Toast',
  // tags: ['autodocs'],
  render: (args) => Toast(args),
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: '',
    },
    text: {
      control: { type: 'text' },
      defaultValue: '',
    },
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'light',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved'],
      defaultValue: 'straight',
    },
    contrast: {
      control: { type: 'select' },
      options: ['white', 'contrast'],
      defaultValue: 'white',
    },
  },
} satisfies Meta<ToastAttrs>

export default meta
type Story = StoryObj<ToastAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Shape: straight',
  args: {
    shape: 'straight',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Rounded: Story = {
  name: 'Shape: rounded',
  args: {
    shape: 'rounded',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Smooth: Story = {
  name: 'Shape: smooth',
  args: {
    shape: 'smooth',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Curved: Story = {
  name: 'Shape: curved',
  args: {
    shape: 'curved',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}
// #endregion

// #region Colors
export const Primary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Info: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Success: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Warning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Danger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}
// #endregion

// #region Slot: icon
export const SlotIcon: Story = {
  name: 'Slot: icon',
  args: {
    color: 'success',
    title: 'Success',
    text: 'You need to take some action.',
    icon: html`
      <svg
        class="nui-toast-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z"
            opacity=".2"
          />
          <path
            d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"
          />
        </g>
      </svg>
    `,
    style: 'max-width: 340px;',
  },
}
// #endregion

// #region Slot: icon block
export const SlotIconBlock: Story = {
  name: 'Slot: icon',
  args: {
    color: 'success',
    title: 'Success',
    text: 'You need to take some action.',
    iconBlock: html`
      <svg
        class="nui-toast-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z"
            opacity=".2"
          />
          <path
            d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"
          />
        </g>
      </svg>
    `,
    style: 'max-width: 340px;',
  },
}
// #endregion

// #region Slot: icon block borderless
export const SlotIconBlockBorderless: Story = {
  name: 'Slot: icon',
  args: {
    color: 'success',
    title: 'Success',
    text: 'You need to take some action.',
    borderless: true,
    iconBlock: html`
      <svg
        class="nui-toast-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z"
            opacity=".2"
          />
          <path
            d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"
          />
        </g>
      </svg>
    `,
    style: 'max-width: 340px;',
  },
}
// #endregion
