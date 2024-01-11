import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ListAttrs } from './list.types'
import { List } from './list.component'
import { Avatar } from '../avatar/avatar.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/List',
  // tags: ['autodocs'],
  render: (args) => List(args),
  argTypes: {
    ordered: {
      name: 'Ordered',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    hasMedia: {
      name: 'Has media',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} satisfies Meta<ListAttrs>

export default meta
type Story = StoryObj<ListAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    children: html`
      <li>Finish project UX</li>
      <li>Meet with Andy at 3:00pm</li>
      <li>Get groceries for Anna</li>
      <li>Pay water bill</li>
    `,
  },
}
// #endregion

// #region Unordered
export const Unordered: Story = {
  name: 'Unordered list',
  args: {
    children: html`
      <li>Finish project UX</li>
      <li>Meet with Andy at 3:00pm</li>
      <li>Get groceries for Anna</li>
      <li>Pay water bill</li>
    `,
  },
}
// #endregion

// #region Ordered
export const Ordered: Story = {
  name: 'Ordered list',
  args: {
    ordered: true,
    children: html`
      <li>Finish project UX</li>
      <li>Meet with Andy at 3:00pm</li>
      <li>Get groceries for Anna</li>
      <li>Pay water bill</li>
    `,
  },
}
// #endregion

// #region Media:text
export const MediaText: Story = {
  name: 'Media text',
  args: {
    hasMedia: true,
    children: html`
      <li class="nui-list-item">
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Finish project UX
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Close resubing pending tasks
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Meet with Andy at 3:00pm
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Meeting about next project steps
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Get groceries for Anna
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            In preparation of next Friday's party
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Pay water bill
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Bill must be paid before next Tuesday
          </p>
        </div>
      </li>
    `,
  },
}
// #endregion

// #region Media:icon
export const MediaIcon: Story = {
  name: 'Media icon',
  args: {
    hasMedia: true,
    children: html`
      <li class="nui-list-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="w-7 h-7 shrink-0 text-violet-500"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
            opacity=".2"
          ></path>
          <path
            fill="currentColor"
            d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 160H40V56h176v144ZM80 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm40 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
          ></path>
        </svg>
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Finish project UX
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Close resubing pending tasks
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="w-7 h-7 shrink-0 text-yellow-500"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M88 72v144H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Zm80 0v144h48a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8Z"
            opacity=".2"
          ></path>
          <path
            fill="currentColor"
            d="M216 64h-40v-8a24.1 24.1 0 0 0-24-24h-48a24.1 24.1 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16ZM96 56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm64 24v128H96V80ZM40 80h40v128H40Zm176 128h-40V80h40v128Z"
          ></path>
        </svg>
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Meet with Andy at 3:00pm
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Meeting about next project steps
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="w-7 h-7 shrink-0 text-teal-500"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M224 127.4a95.6 95.6 0 0 1-28.2 68.5c-36.9 36.9-97.3 37.3-134.7.9A96 96 0 0 1 128.6 32a8.1 8.1 0 0 1 7.8 9.8a32 32 0 0 0 30.8 39a8 8 0 0 1 8 8a32 32 0 0 0 39 30.8a8.1 8.1 0 0 1 9.8 7.8Z"
            opacity=".2"
          ></path>
          <path
            fill="currentColor"
            d="M225.9 114.9a15.8 15.8 0 0 0-13.4-3.1a23.9 23.9 0 0 1-29.3-23.1a16 16 0 0 0-15.9-15.9a23.9 23.9 0 0 1-23.1-29.3A16.1 16.1 0 0 0 128.6 24h-.6A104.1 104.1 0 0 0 24 128.7a104 104 0 0 0 208-1.3a15.7 15.7 0 0 0-6.1-12.5Zm-35.7 75.4c-33.9 33.8-89.3 34.1-123.5.8A88 88 0 0 1 128 40h.6a39.9 39.9 0 0 0 38.6 48.8a39.9 39.9 0 0 0 48.8 38.6a87.6 87.6 0 0 1-25.8 62.9Zm-25.7-26.8a12 12 0 1 1-17 0a12 12 0 0 1 17 0Zm-64-8a12 12 0 1 1-17 0a12 12 0 0 1 17 0Zm-25-39a12 12 0 1 1 17 0a12 12 0 0 1-17 0Zm69 16a12 12 0 1 1 0-17a12 12 0 0 1 0 17Z"
          ></path>
        </svg>
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Get groceries for Anna
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            In preparation of next Friday's party
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="w-7 h-7 shrink-0 text-sky-500"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M128 224a80 80 0 0 1-80-80c0-72 80-128 80-128s80 56 80 128a80 80 0 0 1-80 80Z"
            opacity=".2"
          ></path>
          <path
            fill="currentColor"
            d="M174 47.8a259.4 259.4 0 0 0-41.4-38.4a8.1 8.1 0 0 0-9.2 0A259.4 259.4 0 0 0 82 47.8C54.5 79.3 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.5-64.7-42-96.2ZM128 216a72.1 72.1 0 0 1-72-72c0-57.2 55.5-105 72-118c16.5 13 72 60.8 72 118a72.1 72.1 0 0 1-72 72Zm55.2-62.6a55.8 55.8 0 0 1-45.8 45.7h-1.3a8 8 0 0 1-1.3-15.9a39.7 39.7 0 0 0 32.6-32.6a8 8 0 0 1 9.3-6.5a7.9 7.9 0 0 1 6.5 9.3Z"
          ></path>
        </svg>
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Pay water bill
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Bill must be paid before next Tuesday
          </p>
        </div>
      </li>
    `,
  },
}
// #endregion

// #region Media:avatar
export const MediaAvatar: Story = {
  name: 'Media avatar',
  args: {
    hasMedia: true,
    children: html`
      <li class="nui-list-item">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/15.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/15.svg',
          size: 'xs',
        })}
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Finish project UX
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Close resubing pending tasks
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/10.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/10.svg',
          size: 'xs',
        })}
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Meet with Andy at 3:00pm
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Meeting about next project steps
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/24.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/24.svg',
          size: 'xs',
        })}
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Get groceries for Anna
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            In preparation of next Friday's party
          </p>
        </div>
      </li>
      <li class="nui-list-item">
        ${Avatar({
          src: 'https://apollux.cssninja.io/img/avatars/25.svg',
          srcDark: 'https://apollux.cssninja.io/img/avatars/25.svg',
          size: 'xs',
        })}
        <div>
          <h6
            class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-muted-100"
          >
            Pay water bill
          </h6>
          <p
            class="nui-paragraph nui-paragraph-xs text-muted-500 dark:text-muted-400"
          >
            Bill must be paid before next Tuesday
          </p>
        </div>
      </li>
    `,
  },
}
// #endregion
