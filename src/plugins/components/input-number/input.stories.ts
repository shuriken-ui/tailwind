import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { InputAttrs } from './input.types'
import { InputNumber } from './input.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Input Number',
  // tags: ['autodocs'],
  render: (args) => InputNumber(args),
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
    shape: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
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
} satisfies Meta<InputAttrs>

export default meta
type Story = StoryObj<InputAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    id: 'input',
    placeholder: 'Enter a number...',
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Shape: straight',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'straight',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
  },
}

export const Rounded: Story = {
  name: 'Shape: rounded',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
  },
}

export const Smooth: Story = {
  name: 'Shape: smooth',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'smooth',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
  },
}

export const Curved: Story = {
  name: 'Shape: curved',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'curved',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
  },
}

export const Full: Story = {
  name: 'Shape: full',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'full',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
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
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'muted',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ContrastMutedMd: Story = {
  name: 'Contrast muted: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'muted',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ContrastMutedLg: Story = {
  name: 'Contrast muted: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'muted',
    shape: 'rounded',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
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
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    labelFloat: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LabelFloatMd: Story = {
  name: 'Label float: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    labelFloat: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LabelFloatLg: Story = {
  name: 'Label float: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    labelFloat: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
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
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    colorFocus: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusMd: Story = {
  name: 'Color focus: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    colorFocus: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ColorFocusLg: Story = {
  name: 'Color focus: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    colorFocus: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
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
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    '?disabled': true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledMd: Story = {
  name: 'Disabled: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    '?disabled': true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const DisabledLg: Story = {
  name: 'Disabled: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    '?disabled': true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
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
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    loading: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingMd: Story = {
  name: 'Loading: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    loading: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const LoadingLg: Story = {
  name: 'Loading: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    loading: true,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
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
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    error: 'Please enter a valid value',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorMd: Story = {
  name: 'Error: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    error: 'Please enter a valid value',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const ErrorLg: Story = {
  name: 'Error: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    error: 'Please enter a valid value',
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region Slot:icon
export const SlotIconSm: Story = {
  name: 'Slot icon: sm',
  args: {
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    icon: html`
      <svg
        class="nui-input-number-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    `,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SlotIconMd: Story = {
  name: 'Slot icon: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    icon: html`
      <svg
        class="nui-input-number-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    `,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SlotIconLg: Story = {
  name: 'Slot icon: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    icon: html`
      <svg
        class="nui-input-number-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    `,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region Slot:icon float
export const SlotIconFloatSm: Story = {
  name: 'Slot icon float: sm',
  args: {
    id: 'input',
    label: 'Username',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    labelFloat: true,
    icon: html`
      <svg
        class="nui-input-number-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    `,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SlotIconFloatMd: Story = {
  name: 'Slot icon float: md',
  args: {
    id: 'input',
    label: 'Username',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    labelFloat: true,
    icon: html`
      <svg
        class="nui-input-number-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    `,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}

export const SlotIconFloatLg: Story = {
  name: 'Slot icon float: lg',
  args: {
    id: 'input',
    label: 'Username',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    labelFloat: true,
    icon: html`
      <svg
        class="nui-input-number-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21l-4.35-4.35" />
        </g>
      </svg>
    `,
    type: 'text',
    inputmode: 'numeric',
    placeholder: 'Enter a number',
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
  },
}
// #endregion

// #region Slot:action
export const SlotActionSm: Story = {
  name: 'Slot icon: sm',
  args: {
    id: 'input',
    label: 'Password',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    actionSlot: html`
      <button
        type="button"
        class="absolute top-0 end-0 h-8 w-8 flex items-center justify-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
        data-nui-tooltip="Show password"
      >
        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </g>
        </svg>
      </button>
    `,
    classes: {
      input: 'pe-8',
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
    type: 'password',
    placeholder: 'Choose a password...',
  },
}

export const SlotActionMd: Story = {
  name: 'Slot icon: md',
  args: {
    id: 'input',
    label: 'Password',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    actionSlot: html`
      <button
        type="button"
        class="absolute top-0 end-0 h-10 w-10 flex items-center justify-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
        data-nui-tooltip="Show password"
      >
        <svg
          class="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </g>
        </svg>
      </button>
    `,
    classes: {
      input: 'pe-10',
      wrapper: 'min-w-[260px] max-w-[260px]',
    },
    type: 'password',
    placeholder: 'Choose a password...',
  },
}

export const SlotActionLg: Story = {
  name: 'Slot icon: lg',
  args: {
    id: 'input',
    label: 'Password',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    actionSlot: html`
      <button
        type="button"
        class="absolute top-0 end-0 h-12 w-12 flex items-center justify-center text-muted-400 hover:text-primary-500 transition-colors duration-300"
        data-nui-tooltip="Show password"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M2 12s3-7 10-7s10 7 10 7s-3 7-10 7s-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </g>
        </svg>
      </button>
    `,
    classes: {
      wrapper: 'min-w-[260px] max-w-[260px]',
      input: 'pe-12',
    },
    type: 'password',
    placeholder: 'Choose a password...',
  },
}
// #endregion
