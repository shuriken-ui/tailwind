import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { FullscreenDropfileAttrs } from './fullscreen-dropfile.types'
import { FullscreenDropfile } from './fullscreen-dropfile.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Fullscreen Dropfile',
  // tags: ['autodocs'],
  render: (args) => FullscreenDropfile(args),
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'dark', 'black'],
      defaultValue: 'primary',
    },
  },
} satisfies Meta<FullscreenDropfileAttrs>

export default meta
type Story = StoryObj<FullscreenDropfileAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    isDropping: true,
    icon: html`
      <svg
        class="nui-fullscreen-dropfile-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          d="M30.31 13v-.32a10.26 10.26 0 0 0-10.45-10a10.47 10.47 0 0 0-9.6 6.1A9.74 9.74 0 0 0 1.6 18.4a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75A7.65 7.65 0 0 1 11 10.74h.67l.23-.63a8.43 8.43 0 0 1 8-5.4a8.26 8.26 0 0 1 8.45 8a7.75 7.75 0 0 1 0 .8l-.08.72l.65.3A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 3.93-15Z"
          class="clr-i-outline clr-i-outline-path-1"
        />
        <path
          fill="currentColor"
          d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5l-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28Z"
          class="clr-i-outline clr-i-outline-path-2"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    `,
    style: 'min-height: 380px;',
  },
}
// #endregion
