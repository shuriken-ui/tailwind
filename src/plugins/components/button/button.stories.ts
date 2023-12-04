import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ButtonAttrs } from './button.types'
import { Button } from './button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Button',
  // tags: ['autodocs'],
  render: (args) => Button(args),
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    rounded: {
      control: { type: 'select' },
      options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
      defaultValue: 'straight',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'pastel', 'outline'],
      defaultValue: 'solid',
    },
    shadow: {
      control: { type: 'select' },
      options: ['flat', 'hover'],
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonAttrs>

export default meta
type Story = StoryObj<ButtonAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    color: 'default',
    label: 'Button',
    // set default values used for UI preview
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region Shapes
export const Straight: Story = {
  name: 'Rounded: straight',
  args: {
    label: 'Button',
  },
}
export const Rounded: Story = {
  name: 'Rounded: rounded',
  args: {
    rounded: 'sm',
    label: 'Button',
  },
}
export const Smooth: Story = {
  name: 'Rounded: smooth',
  args: {
    rounded: 'md',
    label: 'Button',
  },
}
export const Curved: Story = {
  name: 'Rounded: curved',
  args: {
    rounded: 'lg',
    label: 'Button',
  },
}
export const Full: Story = {
  name: 'Rounded: full',
  args: {
    rounded: 'full',
    label: 'Button',
  },
}
// #endregion

// #region Sizes
export const Sm: Story = {
  name: 'Size: sm',
  args: {
    size: 'sm',
    label: 'Button',
    rounded: 'sm',
  },
}
export const Md: Story = {
  name: 'Size: md',
  args: {
    size: 'md',
    label: 'Button',
    rounded: 'sm',
  },
}
export const Lg: Story = {
  name: 'Size: lg',
  args: {
    size: 'lg',
    label: 'Button',
    rounded: 'sm',
  },
}
// #endregion

// #region Flavors:solid
export const SolidDefault: Story = {
  name: 'Solid: default',
  args: {
    color: 'default',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const SolidMuted: Story = {
  name: 'Solid: muted',
  args: {
    color: 'muted',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const SolidPrimary: Story = {
  name: 'Solid: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const SolidInfo: Story = {
  name: 'Solid: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const SolidSuccess: Story = {
  name: 'Solid: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const SolidWarning: Story = {
  name: 'Solid: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const SolidDanger: Story = {
  name: 'Solid: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region Flavors:pastel
export const PastelPrimary: Story = {
  name: 'Pastel: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'pastel',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const PastelInfo: Story = {
  name: 'Pastel: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'pastel',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const PastelSuccess: Story = {
  name: 'Pastel: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'pastel',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const PastelWarning: Story = {
  name: 'Pastel: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'pastel',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const PastelDanger: Story = {
  name: 'Pastel: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'pastel',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region Flavors:outline
export const OutlinePrimary: Story = {
  name: 'Outline: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'outline',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const OutlineInfo: Story = {
  name: 'Outline: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'outline',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const OutlineSuccess: Story = {
  name: 'Outline: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'outline',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const OutlineWarning: Story = {
  name: 'Outline: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'outline',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}

export const OutlineDanger: Story = {
  name: 'Outline: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'outline',
    loading: false,
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region Icons
export const IconDefault: Story = {
  name: 'Icon: default',
  args: {
    color: 'default',
    label: 'Button',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
        />
      </svg>
      <span>Button</span>
    `,
  },
}

export const IconMuted: Story = {
  name: 'Icon: muted',
  args: {
    color: 'muted',
    label: 'Button',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
      <span>Button</span>
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14m-7-7l7 7l-7 7"
        />
      </svg>
    `,
  },
}

export const IconPrimary: Story = {
  name: 'Icon: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
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
          <path
            d="M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6c.7 0 1.3.1 1.9.3M10.3 21a1.94 1.94 0 0 0 3.4 0"
          />
          <circle cx="18" cy="8" r="3" />
        </g>
      </svg>
      <span>Button</span>
    `,
  },
}

export const IconInfo: Story = {
  name: 'Icon: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"
        />
      </svg>
      <span>Button</span>
    `,
  },
}

export const IconSuccess: Story = {
  name: 'Icon: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m22 3.41l-.12-1.26l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58a16.6 16.6 0 0 1 1.18-2.2a9.85 9.85 0 0 1 4.07-3.43a11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53a11.38 11.38 0 0 0-1.39 1.91a16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"
        />
      </svg>
      <span>Button</span>
    `,
  },
}

export const IconWarning: Story = {
  name: 'Icon: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'solid',
    rounded: 'sm',
    size: 'md',
    children: html`
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M336 336H32a16 16 0 0 1-14-23.81l152-272a16 16 0 0 1 27.94 0l152 272A16 16 0 0 1 336 336Z"
        />
        <path
          fill="currentColor"
          d="M336 160a161.07 161.07 0 0 0-32.57 3.32l74.47 133.27A48 48 0 0 1 336 368H183.33A160 160 0 1 0 336 160Z"
        />
      </svg>
      <span>Button</span>
    `,
  },
}

export const IconDanger: Story = {
  name: 'Icon: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'solid',
    loading: false,
    rounded: 'sm',
    size: 'md',
    children: html`
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
        />
      </svg>
      <span>Button</span>
    `,
  },
}
// #endregion

// #region Shadow:flat
export const ShadowFlatDefault: Story = {
  name: 'Shadow flat: default',
  args: {
    color: 'default',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowFlatMuted: Story = {
  name: 'Shadow flat: muted',
  args: {
    color: 'muted',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowFlatPrimary: Story = {
  name: 'Shadow flat: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowFlatInfo: Story = {
  name: 'Shadow flat: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowFlatSuccess: Story = {
  name: 'Shadow flat: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowFlatWarning: Story = {
  name: 'Shadow flat: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowFlatDanger: Story = {
  name: 'Shadow flat: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'solid',
    shadow: 'flat',
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region Shadow:hover
export const ShadowHoverDefault: Story = {
  name: 'Shadow hover: default',
  args: {
    color: 'default',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowHoverMuted: Story = {
  name: 'Shadow hover: muted',
  args: {
    color: 'muted',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowHoverPrimary: Story = {
  name: 'Shadow hover: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowHoverInfo: Story = {
  name: 'Shadow hover: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowHoverSuccess: Story = {
  name: 'Shadow hover: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowHoverWarning: Story = {
  name: 'Shadow hover: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}

export const ShadowHoverDanger: Story = {
  name: 'Shadow hover: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'solid',
    shadow: 'hover',
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region State:loading
export const LoadingDefault: Story = {
  name: 'Loading: default',
  args: {
    color: 'default',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}

export const LoadingMuted: Story = {
  name: 'Loading: muted',
  args: {
    color: 'muted',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}

export const LoadingPrimary: Story = {
  name: 'Loading: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}

export const LoadingInfo: Story = {
  name: 'Loading: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}

export const LoadingSuccess: Story = {
  name: 'Loading: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}

export const LoadingWarning: Story = {
  name: 'Loading: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}

export const LoadingDanger: Story = {
  name: 'Loading: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'solid',
    loading: true,
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region State:disabled
export const DisabledDefault: Story = {
  name: 'Disabled: default',
  args: {
    color: 'default',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}

export const DisabledMuted: Story = {
  name: 'Disabled: muted',
  args: {
    color: 'muted',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}

export const DisabledPrimary: Story = {
  name: 'Disabled: primary',
  args: {
    color: 'primary',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}

export const DisabledInfo: Story = {
  name: 'Disabled: info',
  args: {
    color: 'info',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}

export const DisabledSuccess: Story = {
  name: 'Disabled: success',
  args: {
    color: 'success',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}

export const DisabledWarning: Story = {
  name: 'Disabled: warning',
  args: {
    color: 'warning',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}

export const DisabledDanger: Story = {
  name: 'Disabled: danger',
  args: {
    color: 'danger',
    label: 'Button',
    variant: 'solid',
    '?disabled': true,
    rounded: 'sm',
    size: 'md',
  },
}
// #endregion

// #region Slot
export const LabelSlot: Story = {
  name: 'Slots: default slot',
  args: {
    rounded: 'sm',
    children: html`
      <span>Using the slot</span>
    `,
  },
}
// #endregion
