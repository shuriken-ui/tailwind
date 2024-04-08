import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { DropdownItemAttrs } from './dropdown-item.types'
import { DropdownItem } from './dropdown-item.component'
import { Avatar } from '../avatar/avatar.component'
import { Button } from '../button/button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Dropdown Item',
  // tags: ['autodocs'],
  render: (args) => DropdownItem(args),
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: '',
    },
    text: {
      control: { type: 'text' },
      defaultValue: '',
    },
    disabled: {
      name: 'disabled',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    contrast: {
      control: { type: 'select' },
      options: ['default', 'contrast'],
      defaultValue: 'default',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      defaultValue: 'none',
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<DropdownItemAttrs>

export default meta
type Story = StoryObj<DropdownItemAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'sm',
    style: 'max-width: 200px',
  },
}
// #endregion

// #region Rounded
export const ShapeStraight: Story = {
  name: 'Rounded: none',
  args: {
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'none',
    style: 'min-width: 200px',
  },
}

export const ShapeRounded: Story = {
  name: 'Rounded: sm',
  args: {
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'sm',
    style: 'min-width: 200px',
  },
}

export const ShapeSmooth: Story = {
  name: 'Rounded: md',
  args: {
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'md',
    style: 'min-width: 200px',
  },
}

export const ShapeCurved: Story = {
  name: 'Rounded: lg',
  args: {
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'lg',
    style: 'min-width: 200px',
  },
}
// #endregion

// #region Slot: start icon
export const SlotStartIcon: Story = {
  name: 'Start slot: icon',
  args: {
    href: '#',
    contrast: 'default',
    color: 'dark',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'sm',
    start: html`
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M208 40v48l-16 16v112a8 8 0 0 1-8 8h-32v-72a24 24 0 0 0-48 0v72H72a8 8 0 0 1-8-8V104L48 88V40a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V40a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V40a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Z"
            opacity=".2"
          />
          <path
            d="M200 24h-16a16 16 0 0 0-16 16v16h-16V40a16 16 0 0 0-16-16h-16a16 16 0 0 0-16 16v16H88V40a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 96L56 107.31V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V107.31L211.31 96A15.86 15.86 0 0 0 216 84.69V40a16 16 0 0 0-16-16Zm-56 192h-32v-64a16 16 0 0 1 32 0Zm56-131.31L188.69 96a15.86 15.86 0 0 0-4.69 11.31V216h-24v-64a32 32 0 0 0-64 0v64H72V107.31A15.86 15.86 0 0 0 67.31 96L56 84.69V40h16v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V40h16v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V40h16Z"
          />
        </g>
      </svg>
    `,
    style: 'min-width: 200px',
  },
}
// #endregion

// #region Slot: start avatar
export const SlotStartAvatar: Story = {
  name: 'Start slot: avatar',
  args: {
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'sm',
    start: html`
      ${Avatar({
        size: 'xs',
        src: 'https://apollux.cssninja.io/img/avatars/24.svg',
      })}
    `,
    style: 'min-width: 200px',
  },
}
// #endregion

// #region Slot: end action
export const SlotEndAction: Story = {
  name: 'End slot: action',
  args: {
    href: '#',
    contrast: 'default',
    title: 'Dropdown Item',
    text: 'Some nice item subtitle',
    rounded: 'sm',
    start: html`
      ${Avatar({
        size: 'xs',
        src: 'https://apollux.cssninja.io/img/avatars/10.svg',
      })}
    `,
    end: html`
      ${Button({
        contrast: 'default',
        size: 'sm',
        rounded: 'sm',
        children: html`
          <span>Action</span>
        `,
      })}
    `,
    style: 'min-width: 280px',
  },
}
// #endregion
