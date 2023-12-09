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
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      defaultValue: 'md',
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

// #region Contrast
export const White: Story = {
  name: 'Contrast: white',
  args: {
    rounded: 'sm',
    title: 'Toast title',
    text: 'You need to take some action.',
    contrast: 'white',
  },
}

export const Contrast: Story = {
  name: 'Contrast: contrast',
  args: {
    rounded: 'sm',
    title: 'Toast title',
    text: 'You need to take some action.',
    contrast: 'contrast',
  },
}
// #endregion

// #region Rounded
export const Straight: Story = {
  name: 'Rounded: none',
  args: {
    rounded: 'none',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Rounded: Story = {
  name: 'Rounded: sm',
  args: {
    rounded: 'sm',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Smooth: Story = {
  name: 'Rounded: md',
  args: {
    rounded: 'md',
    title: 'Toast title',
    text: 'You need to take some action.',
    style: 'max-width: 340px;',
  },
}

export const Curved: Story = {
  name: 'Rounded: lg',
  args: {
    rounded: 'lg',
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

// #region Slot: icon (default)
export const SlotIconDefault: Story = {
  name: 'Slot: icon',
  args: {
    color: 'default',
    title: 'Default',
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
            d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12Z"
            opacity=".2"
          />
          <path
            d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8Zm53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon (primary)
export const SlotIconPrimary: Story = {
  name: 'Slot: icon',
  args: {
    color: 'primary',
    title: 'Primary',
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
            d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89Z"
            opacity=".2"
          />
          <path
            d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon (info)
export const SlotIconInfo: Story = {
  name: 'Slot: icon',
  args: {
    color: 'info',
    title: 'Info',
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
          <path d="M224 60a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z" opacity=".2" />
          <path
            d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0Zm16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36Zm-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon (success)
export const SlotIconSuccess: Story = {
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
  },
}
// #endregion

// #region Slot: icon (warning)
export const SlotIconWarning: Story = {
  name: 'Slot: icon',
  args: {
    color: 'warning',
    title: 'Warning',
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
            d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
            opacity=".2"
          />
          <path
            d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon (danger)
export const SlotIconDanger: Story = {
  name: 'Slot: icon',
  args: {
    color: 'danger',
    title: 'Danger',
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
            d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
            opacity=".2"
          />
          <path
            d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block (default)
export const SlotIconBlockDefault: Story = {
  name: 'Slot: icon',
  args: {
    color: 'default',
    title: 'Default',
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
            d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12Z"
            opacity=".2"
          />
          <path
            d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8Zm53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block (primary)
export const SlotIconBlockPrimary: Story = {
  name: 'Slot: icon',
  args: {
    color: 'primary',
    title: 'Primary',
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
            d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89Z"
            opacity=".2"
          />
          <path
            d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block (info)
export const SlotIconBlockInfo: Story = {
  name: 'Slot: icon',
  args: {
    color: 'info',
    title: 'Info',
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
          <path d="M224 60a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z" opacity=".2" />
          <path
            d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0Zm16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36Zm-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block (success)
export const SlotIconBlockSuccess: Story = {
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
  },
}
// #endregion

// #region Slot: icon block (warning)
export const SlotIconBlockWarning: Story = {
  name: 'Slot: icon',
  args: {
    color: 'warning',
    title: 'Warning',
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
            d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
            opacity=".2"
          />
          <path
            d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block (danger)
export const SlotIconBlockDanger: Story = {
  name: 'Slot: icon',
  args: {
    color: 'danger',
    title: 'Danger',
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
            d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
            opacity=".2"
          />
          <path
            d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block borderless (default)
export const SlotIconBlockBorderlessDefault: Story = {
  name: 'Slot: icon',
  args: {
    color: 'default',
    title: 'Default',
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
            d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12Z"
            opacity=".2"
          />
          <path
            d="M168 224a8 8 0 0 1-8 8H96a8 8 0 1 1 0-16h64a8 8 0 0 1 8 8Zm53.85-32a15.8 15.8 0 0 1-13.85 8H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block borderless (primary)
export const SlotIconBlockBorderlessPrimary: Story = {
  name: 'Slot: icon',
  args: {
    color: 'primary',
    title: 'Primary',
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
            d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89Z"
            opacity=".2"
          />
          <path
            d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block borderless (info)
export const SlotIconBlockBorderlessInfo: Story = {
  name: 'Slot: icon',
  args: {
    color: 'info',
    title: 'Info',
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
          <path d="M224 60a28 28 0 1 1-28-28a28 28 0 0 1 28 28Z" opacity=".2" />
          <path
            d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0Zm16-68a36 36 0 1 1-36-36a36 36 0 0 1 36 36Zm-16 0a20 20 0 1 0-20 20a20 20 0 0 0 20-20Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block borderless (success)
export const SlotIconBlockBorderlessSuccess: Story = {
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
  },
}
// #endregion

// #region Slot: icon block borderless (warning)
export const SlotIconBlockBorderlessWarning: Story = {
  name: 'Slot: icon',
  args: {
    color: 'warning',
    title: 'Warning',
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
            d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
            opacity=".2"
          />
          <path
            d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot: icon block borderless (danger)
export const SlotIconBlockBorderlessDanger: Story = {
  name: 'Slot: icon',
  args: {
    color: 'danger',
    title: 'Danger',
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
            d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
            opacity=".2"
          />
          <path
            d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion
