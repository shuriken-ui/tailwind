import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { SelectAttrs } from './select.types'
import { Select } from './select.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Select',
  // tags: ['autodocs'],
  render: (args) => Select(args),
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
} satisfies Meta<SelectAttrs>

export default meta
type Story = StoryObj<SelectAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'input',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-full max-w-xs',
    },
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Shape: straight',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'straight',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const Rounded: Story = {
  name: 'Shape: rounded',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const Smooth: Story = {
  name: 'Shape: smooth',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'smooth',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const Curved: Story = {
  name: 'Shape: curved',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'curved',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const Full: Story = {
  name: 'Shape: full',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'full',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region Contrast: muted
export const ContrastMutedSm: Story = {
  name: 'Muted: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'sm',
    contrast: 'muted',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const ContrastMutedMd: Story = {
  name: 'Muted: md',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'muted',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const ContrastMutedLg: Story = {
  name: 'Muted: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'lg',
    contrast: 'muted',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region Label float
export const LabelFloatSm: Story = {
  name: 'Label float: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    labelFloat: true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const LabelFloatMd: Story = {
  name: 'Label float: md',
  args: {
    id: 'select',
    label: 'Superhero',
    labelFloat: true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const LabelFloatLg: Story = {
  name: 'Label float: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    labelFloat: true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region State: disabled
export const DisabledSm: Story = {
  name: 'Disabled: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    '?disabled': true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const DisabledMd: Story = {
  name: 'Disabled: md',
  args: {
    id: 'select',
    label: 'Superhero',
    '?disabled': true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const DisabledLg: Story = {
  name: 'Disabled: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    '?disabled': true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region State: loading
export const LoadingSm: Story = {
  name: 'Loading: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    loading: true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const LoadingMd: Story = {
  name: 'Loading: md',
  args: {
    id: 'select',
    label: 'Superhero',
    loading: true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const LoadingLg: Story = {
  name: 'Loading: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    loading: true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region State: error
export const ErrorSm: Story = {
  name: 'Error: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    error: 'Please select a valid value',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const ErrorMd: Story = {
  name: 'Error: md',
  args: {
    id: 'select',
    label: 'Superhero',
    error: 'Please select a valid value',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const ErrorLg: Story = {
  name: 'Error: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    error: 'Please select a valid value',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region Slot: icon
export const SlotIconSm: Story = {
  name: 'Icon slot: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    icon: html`
      <svg
        class="nui-select-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M2 12a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2a8 8 0 0 0-5-2H2Z"
          />
          <path
            d="M6 11c1.5 0 3 .5 3 2c-2 0-3 0-3-2Zm12 0c-1.5 0-3 .5-3 2c2 0 3 0 3-2Z"
          />
        </g>
      </svg>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const SlotIconMd: Story = {
  name: 'Icon slot: md',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    icon: html`
      <svg
        class="nui-select-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M2 12a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2a8 8 0 0 0-5-2H2Z"
          />
          <path
            d="M6 11c1.5 0 3 .5 3 2c-2 0-3 0-3-2Zm12 0c-1.5 0-3 .5-3 2c2 0 3 0 3-2Z"
          />
        </g>
      </svg>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const SlotIconLg: Story = {
  name: 'Icon slot: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    icon: html`
      <svg
        class="nui-select-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M2 12a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2a8 8 0 0 0-5-2H2Z"
          />
          <path
            d="M6 11c1.5 0 3 .5 3 2c-2 0-3 0-3-2Zm12 0c-1.5 0-3 .5-3 2c2 0 3 0 3-2Z"
          />
        </g>
      </svg>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion

// #region Slot: icon float
export const SlotIconFloatSm: Story = {
  name: 'Icon float: sm',
  args: {
    id: 'select',
    label: 'Superhero',
    labelFloat: true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    icon: html`
      <svg
        class="nui-select-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M2 12a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2a8 8 0 0 0-5-2H2Z"
          />
          <path
            d="M6 11c1.5 0 3 .5 3 2c-2 0-3 0-3-2Zm12 0c-1.5 0-3 .5-3 2c2 0 3 0 3-2Z"
          />
        </g>
      </svg>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const SlotIconFloatMd: Story = {
  name: 'Icon float: md',
  args: {
    id: 'select',
    label: 'Superhero',
    labelFloat: true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    icon: html`
      <svg
        class="nui-select-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M2 12a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2a8 8 0 0 0-5-2H2Z"
          />
          <path
            d="M6 11c1.5 0 3 .5 3 2c-2 0-3 0-3-2Zm12 0c-1.5 0-3 .5-3 2c2 0 3 0 3-2Z"
          />
        </g>
      </svg>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}

export const SlotIconFloatLg: Story = {
  name: 'Icon float: lg',
  args: {
    id: 'select',
    label: 'Superhero',
    labelFloat: true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    placeholder: 'Choose a hero...',
    options: html`
      <option value="1">Superman</option>
      <option value="2">Batman</option>
      <option value="3">Spiderman</option>
      <option value="4">Ironman</option>
    `,
    icon: html`
      <svg
        class="nui-select-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            d="M2 12a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2a8 8 0 0 0-5-2H2Z"
          />
          <path
            d="M6 11c1.5 0 3 .5 3 2c-2 0-3 0-3-2Zm12 0c-1.5 0-3 .5-3 2c2 0 3 0 3-2Z"
          />
        </g>
      </svg>
    `,
    classes: {
      wrapper: 'w-60 max-w-xs',
    },
  },
}
// #endregion
