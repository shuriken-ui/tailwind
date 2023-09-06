import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { IconBoxAttrs } from './icon-box.types'
import { IconBox } from './icon-box.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Icon Box',
  // tags: ['autodocs'],
  render: (args) => IconBox(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'default',
        'invert',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
      ],
      defaultValue: 'default',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'curved', 'full'],
      defaultValue: 'full',
    },
    flavor: {
      control: { type: 'select' },
      options: ['solid', 'pastel', 'outline'],
      defaultValue: 'solid',
    },
  },
} satisfies Meta<IconBoxAttrs>

export default meta
type Story = StoryObj<IconBoxAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: '2xl',
    children: html`
      <svg
        class="h-8 w-8"
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

// #region Shape: full
export const ShapeFullXs: Story = {
  name: 'Shape: full (xs)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: 'xs',
    children: html`
      <svg
        class="h-3 w-3"
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

export const ShapeFullSm: Story = {
  name: 'Shape: full (sm)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: 'sm',
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

export const ShapeFullMd: Story = {
  name: 'Shape: full (md)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ShapeFullLg: Story = {
  name: 'Shape: full (lg)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: 'lg',
    children: html`
      <svg
        class="h-6 w-6"
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

export const ShapeFullXl: Story = {
  name: 'Shape: full (xl)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: 'xl',
    children: html`
      <svg
        class="h-7 w-7"
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

export const ShapeFull2xl: Story = {
  name: 'Shape: full (2xl)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'full',
    size: '2xl',
    children: html`
      <svg
        class="h-8 w-8"
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

// #region Shape: curved
export const ShapeCurvedXs: Story = {
  name: 'Shape: curved (xs)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'curved',
    size: 'xs',
    children: html`
      <svg
        class="h-3 w-3"
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

export const ShapeCurvedSm: Story = {
  name: 'Shape: curved (sm)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'curved',
    size: 'sm',
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

export const ShapeCurvedMd: Story = {
  name: 'Shape: curved (md)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'curved',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ShapeCurvedLg: Story = {
  name: 'Shape: curved (lg)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'curved',
    size: 'lg',
    children: html`
      <svg
        class="h-6 w-6"
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

export const ShapeCurvedXl: Story = {
  name: 'Shape: curved (xl)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'curved',
    size: 'xl',
    children: html`
      <svg
        class="h-7 w-7"
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

export const ShapeCurved2xl: Story = {
  name: 'Shape: curved (2xl)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'curved',
    size: '2xl',
    children: html`
      <svg
        class="h-8 w-8"
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

// #region Shape: rounded
export const ShapeRoundedXs: Story = {
  name: 'Shape: rounded (xs)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'rounded',
    size: 'xs',
    children: html`
      <svg
        class="h-3 w-3"
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

export const ShapeRoundedSm: Story = {
  name: 'Shape: rounded (sm)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'rounded',
    size: 'sm',
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

export const ShapeRoundedMd: Story = {
  name: 'Shape: rounded (md)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'rounded',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ShapeRoundedLg: Story = {
  name: 'Shape: rounded (lg)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'rounded',
    size: 'lg',
    children: html`
      <svg
        class="h-6 w-6"
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

export const ShapeRoundedXl: Story = {
  name: 'Shape: rounded (xl)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'rounded',
    size: 'xl',
    children: html`
      <svg
        class="h-7 w-7"
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

export const ShapeRounded2xl: Story = {
  name: 'Shape: rounded (2xl)',
  args: {
    color: 'default',
    flavor: 'solid',
    shape: 'rounded',
    size: '2xl',
    children: html`
      <svg
        class="h-8 w-8"
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

// #region Colors: solid
export const ColorSolidPrimary: Story = {
  name: 'Solid: primary',
  args: {
    color: 'primary',
    flavor: 'solid',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorSolidInfo: Story = {
  name: 'Solid: info',
  args: {
    color: 'info',
    flavor: 'solid',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorSolidSuccess: Story = {
  name: 'Solid: success',
  args: {
    color: 'success',
    flavor: 'solid',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorSolidWarning: Story = {
  name: 'Solid: warning',
  args: {
    color: 'warning',
    flavor: 'solid',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorSolidDanger: Story = {
  name: 'Solid: danger',
  args: {
    color: 'danger',
    flavor: 'solid',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

// #region Colors: pastel
export const ColorPastelPrimary: Story = {
  name: 'Pastel: primary',
  args: {
    color: 'primary',
    flavor: 'pastel',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorPastelInfo: Story = {
  name: 'Pastel: info',
  args: {
    color: 'info',
    flavor: 'pastel',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorPastelSuccess: Story = {
  name: 'Pastel: success',
  args: {
    color: 'success',
    flavor: 'pastel',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorPastelWarning: Story = {
  name: 'Pastel: warning',
  args: {
    color: 'warning',
    flavor: 'pastel',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorPastelDanger: Story = {
  name: 'Pastel: danger',
  args: {
    color: 'danger',
    flavor: 'pastel',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

// #region Colors: outline
export const ColorOutlinePrimary: Story = {
  name: 'Outline: primary',
  args: {
    color: 'primary',
    flavor: 'outline',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorOutlineInfo: Story = {
  name: 'Outline: info',
  args: {
    color: 'info',
    flavor: 'outline',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorOutlineSuccess: Story = {
  name: 'Outline: success',
  args: {
    color: 'success',
    flavor: 'outline',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorOutlineWarning: Story = {
  name: 'Outline: warning',
  args: {
    color: 'warning',
    flavor: 'outline',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const ColorOutlineDanger: Story = {
  name: 'Outline: danger',
  args: {
    color: 'danger',
    flavor: 'outline',
    shape: 'full',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

// #region SVG Masks
export const MaskSolidPrimary: Story = {
  name: 'Solid mask: primary',
  args: {
    color: 'primary',
    flavor: 'solid',
    shape: 'straight',
    mask: 'hex',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskSolidInfo: Story = {
  name: 'Solid mask: info',
  args: {
    color: 'info',
    flavor: 'solid',
    shape: 'straight',
    mask: 'hexed',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskSolidSuccess: Story = {
  name: 'Solid mask: success',
  args: {
    color: 'success',
    flavor: 'solid',
    shape: 'straight',
    mask: 'blob',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskSolidWarning: Story = {
  name: 'Solid mask: warning',
  args: {
    color: 'warning',
    flavor: 'solid',
    shape: 'straight',
    mask: 'deca',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskSolidDanger: Story = {
  name: 'Solid mask: danger',
  args: {
    color: 'danger',
    flavor: 'solid',
    shape: 'straight',
    mask: 'diamond',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskPastelPrimary: Story = {
  name: 'Pastel mask: primary',
  args: {
    color: 'primary',
    flavor: 'pastel',
    shape: 'straight',
    mask: 'hex',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskPastelInfo: Story = {
  name: 'Pastel mask: info',
  args: {
    color: 'info',
    flavor: 'pastel',
    shape: 'straight',
    mask: 'hexed',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskPastelSuccess: Story = {
  name: 'Pastel mask: success',
  args: {
    color: 'success',
    flavor: 'pastel',
    shape: 'straight',
    mask: 'blob',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskPastelWarning: Story = {
  name: 'Pastel mask: warning',
  args: {
    color: 'warning',
    flavor: 'pastel',
    shape: 'straight',
    mask: 'deca',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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

export const MaskPastelDanger: Story = {
  name: 'Pastel mask: danger',
  args: {
    color: 'danger',
    flavor: 'pastel',
    shape: 'straight',
    mask: 'diamond',
    size: 'md',
    children: html`
      <svg
        class="h-5 w-5"
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
