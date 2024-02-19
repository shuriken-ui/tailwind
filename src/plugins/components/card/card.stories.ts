import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { CardAttrs } from './card.types'
import { Card } from './card.component'
import { Avatar } from '../avatar/avatar.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Card',
  // tags: ['autodocs'],
  render: (args) => Card(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: [
        'white',
        'white-contrast',
        'muted',
        'muted-contrast',
        'dark',
        'black',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'white',
    },
    elevated: {
      name: 'Elevated',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    elevatedHover: {
      name: 'Elevated hover',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<CardAttrs>

export default meta
type Story = StoryObj<CardAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'white',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: white
export const ColorWhite: Story = {
  name: 'Color: white',
  args: {
    // set default values used for UI preview
    color: 'white',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: white
export const ColorWhiteContrast: Story = {
  name: 'Color: white contrast',
  args: {
    // set default values used for UI preview
    color: 'white-contrast',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: muted
export const ColorMuted: Story = {
  name: 'Color: muted',
  args: {
    // set default values used for UI preview
    color: 'muted',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: muted
export const ColorMutedContrast: Story = {
  name: 'Color: muted contrast',
  args: {
    // set default values used for UI preview
    color: 'muted-contrast',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: dark
export const ColorDark: Story = {
  name: 'Color: dark',
  args: {
    // set default values used for UI preview
    color: 'dark',
    children: html`
      <h6 class="nui-heading nui-weight-medium text-white dark:text-muted-900">
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-200 dark:text-muted-500"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: black
export const ColorBlack: Story = {
  name: 'Color: black',
  args: {
    // set default values used for UI preview
    color: 'black',
    children: html`
      <h6 class="nui-heading nui-weight-medium text-white dark:text-muted-900">
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-200 dark:text-muted-500"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: primary
export const ColorPrimary: Story = {
  name: 'Color: primary',
  args: {
    // set default values used for UI preview
    color: 'primary',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: info
export const ColorInfo: Story = {
  name: 'Color: info',
  args: {
    // set default values used for UI preview
    color: 'info',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: success
export const ColorSuccess: Story = {
  name: 'Color: success',
  args: {
    // set default values used for UI preview
    color: 'success',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: warning
export const ColorWarning: Story = {
  name: 'Color: warning',
  args: {
    // set default values used for UI preview
    color: 'warning',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Color: danger
export const ColorDanger: Story = {
  name: 'Color: danger',
  args: {
    // set default values used for UI preview
    color: 'danger',
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Shadow: flat
export const ShadowFlat: Story = {
  name: 'Shadow: flat',
  args: {
    // set default values used for UI preview
    color: 'white',
    elevated: true,
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Shadow: hover
export const ShadowHover: Story = {
  name: 'Shadow: hover',
  args: {
    // set default values used for UI preview
    color: 'white',
    elevatedHover: true,
    children: html`
      <h6
        class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
      >
        Iam a card title
      </h6>
      <p
        class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
      >
        Iam a nice and lengthy card subtitle
      </p>
    `,
    style: 'padding: 1.5rem; max-width: 340px;',
  },
}
// #endregion

// #region Slot: default
export const Slot: Story = {
  name: 'Slot: default',
  args: {
    // set default values used for UI preview
    color: 'white',
    elevatedHover: true,
    children: html`
      <div class="flex items-center gap-2">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/2.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/2.svg',
          size: 'sm',
        })}
        <div>
          <h6
            class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Amy Johnson
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            UI/UX Designer
          </p>
        </div>
      </div>
    `,
    style: 'padding: 1.25rem; width: 100%;',
  },
}

export const Slot2: Story = {
  name: 'Slot: default',
  args: {
    // set default values used for UI preview
    color: 'white',
    elevatedHover: true,
    children: html`
      <div class="flex items-center gap-2">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/15.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
          size: 'sm',
        })}
        <div>
          <h6
            class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Josh Meyers
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Software Engineer
          </p>
        </div>
      </div>
    `,
    style: 'padding: 1.25rem; width: 100%;',
  },
}

export const Slot3: Story = {
  name: 'Slot: default',
  args: {
    // set default values used for UI preview
    color: 'white',
    elevatedHover: true,
    children: html`
      <div class="flex items-center gap-2">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/10.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
          size: 'sm',
        })}
        <div>
          <h6
            class="nui-heading nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Kendra Wilson
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Product Manager
          </p>
        </div>
      </div>
    `,
    style: 'padding: 1.25rem; width: 100%;',
  },
}
// #endregion
