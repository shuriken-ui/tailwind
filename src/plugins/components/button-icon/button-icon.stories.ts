import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ButtonIconAttrs } from './button-icon.types'
import { ButtonIcon } from './button-icon.component'
import { Avatar } from '../avatar/avatar.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Button Icon',
  // tags: ['autodocs'],
  render: (args) => ButtonIcon(args),
  argTypes: {
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
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonIconAttrs>

export default meta
type Story = StoryObj<ButtonIconAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'default',
    loading: false,
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    size: 'sm',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    size: 'md',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    size: 'lg',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Shape: straight',
  args: {
    shape: 'straight',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const Rounded: Story = {
  name: 'Shape: rounded',
  args: {
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const Smooth: Story = {
  name: 'Shape: smooth',
  args: {
    shape: 'smooth',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const Curved: Story = {
  name: 'Shape: curved',
  args: {
    shape: 'curved',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const Full: Story = {
  name: 'Shape: full',
  args: {
    shape: 'full',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Colors
export const ColorDefault: Story = {
  name: 'Color: default',
  args: {
    color: 'default',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}

export const ColorMuted: Story = {
  name: 'Color: muted',
  args: {
    color: 'muted',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}

export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    color: 'primary',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}

export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    color: 'info',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}

export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    color: 'success',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}

export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    color: 'warning',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}

export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    color: 'danger',
    shape: 'rounded',
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region State: loading
export const SizeSmLoading: Story = {
  name: 'Size: sm',
  args: {
    size: 'sm',
    shape: 'rounded',
    loading: true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const SizeMdLoading: Story = {
  name: 'Size: md',
  args: {
    size: 'md',
    shape: 'rounded',
    loading: true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const SizeLgLoading: Story = {
  name: 'Size: lg',
  args: {
    size: 'lg',
    shape: 'rounded',
    loading: true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region State: disabled
export const StraightDisabled: Story = {
  name: 'Disabled: straight',
  args: {
    shape: 'straight',
    '?disabled': true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const RoundedDisabled: Story = {
  name: 'Disabled: rounded',
  args: {
    shape: 'rounded',
    '?disabled': true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const SmoothDisabled: Story = {
  name: 'Disabled: smooth',
  args: {
    shape: 'smooth',
    '?disabled': true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const CurvedDisabled: Story = {
  name: 'Disabled: curved',
  args: {
    shape: 'curved',
    '?disabled': true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
export const FullDisabled: Story = {
  name: 'Disabled: full',
  args: {
    shape: 'full',
    '?disabled': true,
    children: html`
      <svg
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2" />
          <path
            d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
          />
        </g>
      </svg>
    `,
  },
}
// #endregion

// #region Slot
export const Slot: Story = {
  name: 'Slots: default slot',
  args: {
    shape: 'full',
    size: 'lg',
    children: html`
      ${Avatar({
        src: 'https://apollux.cssninja.io/img/avatars/2.svg',
        srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
        size: 'xs',
      })}
    `,
  },
}
// #endregion