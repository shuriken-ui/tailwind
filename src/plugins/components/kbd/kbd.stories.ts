import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { KbdAttrs } from './kbd.types'
import { Kbd } from './kbd.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Kbd',
  // tags: ['autodocs'],
  render: (args) => Kbd(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'muted'],
      defaultValue: 'default',
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      defaultValue: 'none',
    },
  },
} satisfies Meta<KbdAttrs>

export default meta
type Story = StoryObj<KbdAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    children: html`
      Esc
    `,
  },
}
// #endregion

// #region Default
export const DefaultXs: Story = {
  name: 'Default: xs',
  args: {
    size: 'xs',
    children: html`
      Esc
    `,
  },
}

export const DefaultSm: Story = {
  name: 'Default: sm',
  args: {
    size: 'sm',
    children: html`
      Esc
    `,
  },
}

export const DefaultMd: Story = {
  name: 'Default: md',
  args: {
    size: 'md',
    children: html`
      Esc
    `,
  },
}

export const DefaultLg: Story = {
  name: 'Default: lg',
  args: {
    size: 'lg',
    children: html`
      Esc
    `,
  },
}
// #endregion

// #region Muted
export const MutedXs: Story = {
  name: 'Muted: xs',
  args: {
    size: 'xs',
    color: 'muted',
    children: html`
      Esc
    `,
  },
}

export const MutedSm: Story = {
  name: 'Muted: sm',
  args: {
    size: 'sm',
    color: 'muted',
    children: html`
      Esc
    `,
  },
}

export const MutedMd: Story = {
  name: 'Muted: md',
  args: {
    size: 'md',
    color: 'muted',
    children: html`
      Esc
    `,
  },
}

export const MutedLg: Story = {
  name: 'Muted: lg',
  args: {
    size: 'lg',
    color: 'muted',
    children: html`
      Esc
    `,
  },
}
// #endregion

// #region Icon
export const IconXs: Story = {
  name: 'Icon: xs',
  args: {
    size: 'xs',
    children: html`
      <span class="nui-kbd-icon-outer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="nui-kbd-icon-inner"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M3 6.5a3.5 3.5 0 1 1 7 0V8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 0 1 3 6.5M8 8V6.5A1.5 1.5 0 1 0 6.5 8zm2 2v4h4v-4zm-2 6H6.5A1.5 1.5 0 1 0 8 17.5zm8 0v1.5a1.5 1.5 0 1 0 1.5-1.5zm0-8h1.5A1.5 1.5 0 1 0 16 6.5z"
            />
          </g>
        </svg>
      </span>
    `,
  },
}

export const IconSm: Story = {
  name: 'Icon: sm',
  args: {
    size: 'sm',
    children: html`
      <span class="nui-kbd-icon-outer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="nui-kbd-icon-inner"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M3 6.5a3.5 3.5 0 1 1 7 0V8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 0 1 3 6.5M8 8V6.5A1.5 1.5 0 1 0 6.5 8zm2 2v4h4v-4zm-2 6H6.5A1.5 1.5 0 1 0 8 17.5zm8 0v1.5a1.5 1.5 0 1 0 1.5-1.5zm0-8h1.5A1.5 1.5 0 1 0 16 6.5z"
            />
          </g>
        </svg>
      </span>
    `,
  },
}

export const IconMd: Story = {
  name: 'Icon: md',
  args: {
    size: 'md',
    children: html`
      <span class="nui-kbd-icon-outer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="nui-kbd-icon-inner"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M3 6.5a3.5 3.5 0 1 1 7 0V8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 0 1 3 6.5M8 8V6.5A1.5 1.5 0 1 0 6.5 8zm2 2v4h4v-4zm-2 6H6.5A1.5 1.5 0 1 0 8 17.5zm8 0v1.5a1.5 1.5 0 1 0 1.5-1.5zm0-8h1.5A1.5 1.5 0 1 0 16 6.5z"
            />
          </g>
        </svg>
      </span>
    `,
  },
}

export const IconLg: Story = {
  name: 'Icon: lg',
  args: {
    size: 'lg',
    children: html`
      <span class="nui-kbd-icon-outer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="nui-kbd-icon-inner"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M3 6.5a3.5 3.5 0 1 1 7 0V8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 0 1 3 6.5M8 8V6.5A1.5 1.5 0 1 0 6.5 8zm2 2v4h4v-4zm-2 6H6.5A1.5 1.5 0 1 0 8 17.5zm8 0v1.5a1.5 1.5 0 1 0 1.5-1.5zm0-8h1.5A1.5 1.5 0 1 0 16 6.5z"
            />
          </g>
        </svg>
      </span>
    `,
  },
}
// #endregion
