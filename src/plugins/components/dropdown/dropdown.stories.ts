import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { DropdownAttrs } from './dropdown.types'
import { Dropdown } from './dropdown.component'
import { DropdownItem } from '../dropdown-item/dropdown-item.component'
import { DropdownDivider } from '../dropdown-divider/dropdown-divider.component'
import { Avatar } from '../avatar/avatar.component'
import { Button } from '../button/button.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Dropdown',
  // tags: ['autodocs'],
  render: (args) => Dropdown(args),
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '',
    },
    headerLabel: {
      control: { type: 'text' },
      defaultValue: '',
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
        'default-contrast',
        'muted',
        'muted-contrast',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'none',
      ],
      defaultValue: 'default',
    },
    buttonColor: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'light',
        'muted',
        'none',
      ],
      defaultValue: 'default',
    },
    size: {
      control: { type: 'select' },
      options: ['md', 'lg'],
      defaultValue: 'lg',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'straight',
    },
    variant: {
      control: { type: 'select' },
      options: ['button', 'context', 'text'],
      defaultValue: 'button',
    },
    orientation: {
      control: { type: 'select' },
      options: ['start', 'end'],
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<DropdownAttrs>

export default meta
type Story = StoryObj<DropdownAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    color: 'default',
    label: 'Dropdown',
    variant: 'button',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Variant: Button
export const ButtonEnd: Story = {
  name: 'Main example',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'button',
    orientation: 'end',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Variant: context
export const ContextStart: Story = {
  name: 'Context: start',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'context',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}

export const ContextEnd: Story = {
  name: 'Context: end',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'context',
    orientation: 'end',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Variant: text
export const TextStart: Story = {
  name: 'Text: start',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'text',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}

export const TextEnd: Story = {
  name: 'Text: end',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'text',
    orientation: 'end',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Button: color
export const ButtonColor: Story = {
  name: 'Button: color',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'button',
    buttonColor: 'primary',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Divider
export const Divider: Story = {
  name: 'Dropdown: divider',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'button',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
        rounded: 'sm',
      })}
      ${DropdownDivider({})}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
        rounded: 'sm',
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
        rounded: 'sm',
      })}
      ${DropdownDivider({})}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
        rounded: 'sm',
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Slot: icon
export const SlotIcon: Story = {
  name: 'Slot: icon',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'context',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Account',
        text: 'View account info',
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
                d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64Z"
                opacity=".2"
              />
              <path
                d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"
              />
            </g>
          </svg>
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Products',
        text: 'Manage your inventory',
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
              <path d="M184 136v64H72v-64Z" opacity=".2" />
              <path
                d="M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16ZM40 98.67L128 40l88 58.66V192h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40ZM176 144v16h-40v-16Zm-56 16H80v-16h40Zm-40 16h40v16H80Zm56 0h40v16h-40Z"
              />
            </g>
          </svg>
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Orders',
        text: 'View and manage orders',
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
                d="M224 96v16a32 32 0 0 1-64 0V96H96v16a32 32 0 0 1-64 0V96l14.34-50.2A8 8 0 0 1 54 40h148a8 8 0 0 1 7.69 5.8Z"
                opacity=".2"
              />
              <path
                d="M232 96a7.89 7.89 0 0 0-.3-2.2l-14.35-50.2A16.07 16.07 0 0 0 202 32H54a16.07 16.07 0 0 0-15.35 11.6L24.31 93.8A7.89 7.89 0 0 0 24 96v16a40 40 0 0 0 16 32v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-64a40 40 0 0 0 16-32ZM54 48h148l11.42 40H42.61Zm50 56h48v8a24 24 0 0 1-48 0Zm-16 0v8a24 24 0 0 1-48 0v-8Zm112 104H56v-56.8a40.57 40.57 0 0 0 8 .8a40 40 0 0 0 32-16a40 40 0 0 0 64 0a40 40 0 0 0 32 16a40.57 40.57 0 0 0 8-.8Zm-8-72a24 24 0 0 1-24-24v-8h48v8a24 24 0 0 1-24 24Z"
              />
            </g>
          </svg>
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Settings',
        text: 'Manage store preferences',
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
                d="M112 128a32 32 0 1 1-32-32a32 32 0 0 1 32 32Z"
                opacity=".2"
              />
              <path
                d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144Zm0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112ZM80 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z"
              />
            </g>
          </svg>
        `,
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Slot: avatar
export const SlotAvatar: Story = {
  name: 'Slot: avatar',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'button',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Anna Lopez',
        text: 'Software Engineer',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/24.svg',
          })}
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Melany Wright',
        text: 'Sales Manager',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/25.svg',
          })}
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Kendra Wilson',
        text: 'Project Manager',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/10.svg',
          })}
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Maya Piretti',
        text: 'Product manager',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/2.svg',
          })}
        `,
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion

// #region Slot: action
export const SlotAction: Story = {
  name: 'Slot: action',
  args: {
    color: 'default',
    label: 'Dropdown',
    variant: 'button',
    orientation: 'start',
    rounded: 'sm',
    size: 'lg',
    open: true,
    children: html`
      ${DropdownItem({
        href: '#',
        title: 'Anna Lopez',
        text: 'Software Engineer',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/24.svg',
          })}
        `,
        end: html`
          ${Button({
            size: 'sm',
            rounded: 'sm',
            children: html`
              <span>Action</span>
            `,
          })}
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Melany Wright',
        text: 'Sales Manager',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/25.svg',
          })}
        `,
        end: html`
          ${Button({
            size: 'sm',
            rounded: 'sm',
            children: html`
              <span>Action</span>
            `,
          })}
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Kendra Wilson',
        text: 'Project Manager',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/10.svg',
          })}
        `,
        end: html`
          ${Button({
            size: 'sm',
            rounded: 'sm',
            children: html`
              <span>Action</span>
            `,
          })}
        `,
      })}
      ${DropdownItem({
        href: '#',
        title: 'Maya Piretti',
        text: 'Product manager',
        rounded: 'sm',
        start: html`
          ${Avatar({
            size: 'xs',
            src: 'https://apollux.cssninja.io/img/avatars/2.svg',
          })}
        `,
        end: html`
          ${Button({
            size: 'sm',
            rounded: 'sm',
            children: html`
              <span>Action</span>
            `,
          })}
        `,
      })}
    `,
    style: 'min-height: 310px;',
  },
}
// #endregion
