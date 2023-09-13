import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ListboxAttrs } from './listbox.types'
import { Listbox } from './listbox.component'
import { IconBox } from '../icon-box/icon-box.component'
import { Avatar } from '../avatar/avatar.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Form/Listbox',
  // tags: ['autodocs'],
  render: (args) => Listbox(args),
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
} satisfies Meta<ListboxAttrs>

export default meta
type Story = StoryObj<ListboxAttrs>

// Demo data
const languages = [
  {
    id: 1,
    name: 'Javascript',
  },
  {
    id: 2,
    name: 'Typescript',
  },
  {
    id: 3,
    name: 'Python',
  },
  {
    id: 4,
    name: 'React.js',
  },
]

const activities = [
  {
    id: 1,
    icon: '<svg class="w-5 h-5 text-muted-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z" opacity=".2"/><path d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"/></g></svg>',
    title: 'Swordsmanship',
    subtitle: 'Learn to wield a sword',
  },
  {
    id: 2,
    icon: '<svg class="w-5 h-5 text-muted-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89Z" opacity=".2"/><path d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18Z"/></g></svg>',
    title: 'Party',
    subtitle: 'Launch a party',
  },
  {
    id: 3,
    icon: '<svg class="w-5 h-5 text-muted-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M96 37.5v72l-62.4 36A96 96 0 0 1 96 37.5Z" opacity=".2"/><path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117a8 8 0 0 0 4.52 5.81a7.86 7.86 0 0 0 3.35.74a8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38Zm130.34 26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05 104.05 0 0 0 128 24a8 8 0 0 0-8 8v91.83l-78.81 45.9a8 8 0 0 0-2.87 11A104 104 0 0 0 232 128a103.34 103.34 0 0 0-13.66-51.48ZM136 40.36a88.05 88.05 0 0 1 63.89 36.94L136 114.51ZM128 216a88.45 88.45 0 0 1-71.49-36.68l75.4-43.91l.22-.14l75.77-44.13A88 88 0 0 1 128 216Z"/></g></svg>',
    title: 'Reports',
    subtitle: 'View weekly reports',
  },
  {
    id: 4,
    icon: `<svg class="w-5 h-5 text-muted-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M210.26 210.26c-17.23 17.23-68-5.63-113.46-51.06S28.51 63 45.74 45.74s68 5.63 113.46 51.06s68.29 96.2 51.06 113.46Z" opacity=".2"/><path d="M196.12 128c24.65-34.61 37.22-70.38 19.74-87.86S162.61 35.23 128 59.88C93.39 35.23 57.62 22.66 40.14 40.14S35.23 93.39 59.88 128c-24.65 34.61-37.22 70.38-19.74 87.86c5.63 5.63 13.15 8.14 21.91 8.14c18.48 0 42.48-11.17 66-27.88C151.47 212.83 175.47 224 194 224c8.76 0 16.29-2.52 21.91-8.14c17.43-17.48 4.86-53.25-19.79-87.86Zm8.43-76.55c7.64 7.64 2.48 32.4-18.52 63.28a300.33 300.33 0 0 0-21.19-23.57A300.33 300.33 0 0 0 141.27 70c30.88-21 55.64-26.2 63.28-18.55ZM176.29 128a289.14 289.14 0 0 1-22.76 25.53A289.14 289.14 0 0 1 128 176.29a289.14 289.14 0 0 1-25.53-22.76A289.14 289.14 0 0 1 79.71 128A298.62 298.62 0 0 1 128 79.71a289.14 289.14 0 0 1 25.53 22.76A289.14 289.14 0 0 1 176.29 128ZM51.45 51.45c2.2-2.21 5.83-3.35 10.62-3.35c11.82 0 30.69 6.9 52.65 21.9a304 304 0 0 0-23.56 21.16A300.33 300.33 0 0 0 70 114.73C49 83.85 43.81 59.09 51.45 51.45Zm0 153.1c-7.64-7.64-2.45-32.4 18.55-63.28a300.33 300.33 0 0 0 21.19 23.57A304.18 304.18 0 0 0 114.73 186c-30.88 21-55.64 26.2-63.28 18.55Zm153.1 0c-7.64 7.65-32.4 2.48-63.28-18.52a304.18 304.18 0 0 0 23.57-21.19A300.33 300.33 0 0 0 186 141.27c21 30.88 26.19 55.64 18.55 63.28ZM140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></g></svg>`,
    title: 'React',
    subtitle: 'Learn React.js',
  },
]

const people = [
  {
    id: 1,
    name: 'Kendra W.',
    role: 'Sales Manager',
    img: 'https://media.cssninja.io/shuriken/avatars/10.svg',
  },
  {
    id: 2,
    name: 'Anna L.',
    role: 'Product Manager',
    img: 'https://media.cssninja.io/shuriken/avatars/24.svg',
  },
  {
    id: 3,
    name: 'Melany C.',
    role: 'Project Manager',
    img: 'https://media.cssninja.io/shuriken/avatars/25.svg',
  },
  {
    id: 4,
    name: 'John B.',
    role: 'Senior Accountant',
    img: 'https://media.cssninja.io/shuriken/avatars/8.svg',
  },
]

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'max-w-xs min-h-[280px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Shapes
export const ShapeStraight: Story = {
  name: 'Shape: straight',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'straight',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[310px] max-w-[310px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ShapeRounded: Story = {
  name: 'Shape: rounded',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[310px] max-w-[310px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ShapeSmooth: Story = {
  name: 'Shape: smooth',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'smooth',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[310px] max-w-[310px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ShapeCurved: Story = {
  name: 'Shape: curved',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'curved',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[310px] max-w-[310px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ShapeFull: Story = {
  name: 'Shape: full',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'full',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[310px] max-w-[310px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Sizes
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Contrast: muted
export const ContrastMutedSm: Story = {
  name: 'Contrast muted: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'sm',
    contrast: 'muted',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ContrastMutedMd: Story = {
  name: 'Contrast muted: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'muted',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ContrastMutedLg: Story = {
  name: 'Contrast muted: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'lg',
    contrast: 'muted',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Label: float
export const LabelFloatSm: Story = {
  name: 'Label float: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    labelFloat: true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const LabelFloatMd: Story = {
  name: 'Label float: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    labelFloat: true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const LabelFloatLg: Story = {
  name: 'Label float: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    labelFloat: true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region State: disabled
export const DisabledSm: Story = {
  name: 'State disabled: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    '?disabled': true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const DisabledMd: Story = {
  name: 'State disabled: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    '?disabled': true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const DisabledLg: Story = {
  name: 'State disabled: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    '?disabled': true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region State: loading
export const LoadingSm: Story = {
  name: 'State loading: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    loading: true,
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const LoadingMd: Story = {
  name: 'State loading: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    loading: true,
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const LoadingLg: Story = {
  name: 'State loading: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    loading: true,
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region State: error
export const ErrorSm: Story = {
  name: 'State error: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    error: 'Please select a valid value',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ErrorMd: Story = {
  name: 'State error: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    error: 'Please select a valid value',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const ErrorLg: Story = {
  name: 'State error: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    error: 'Please select a valid value',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Slot: icon
export const SlotIconSm: Story = {
  name: 'Slot icon: sm',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    iconSlot: html`
      <svg
        class="nui-listbox-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
            opacity=".2"
          />
          <path
            d="M128 128a8 8 0 0 1-3 6.25l-40 32a8 8 0 1 1-10-12.5L107.19 128L75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 3 6.25Zm48 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Zm56-96v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 144V56H40v144h176Z"
          />
        </g>
      </svg>
    `,
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const SlotIconMd: Story = {
  name: 'Slot icon: md',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    iconSlot: html`
      <svg
        class="nui-listbox-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
            opacity=".2"
          />
          <path
            d="M128 128a8 8 0 0 1-3 6.25l-40 32a8 8 0 1 1-10-12.5L107.19 128L75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 3 6.25Zm48 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Zm56-96v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 144V56H40v144h176Z"
          />
        </g>
      </svg>
    `,
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const SlotIconLg: Story = {
  name: 'Slot icon: lg',
  args: {
    value: languages[0].name,
    label: 'Languages',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[260px]',
    },
    iconSlot: html`
      <svg
        class="nui-listbox-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z"
            opacity=".2"
          />
          <path
            d="M128 128a8 8 0 0 1-3 6.25l-40 32a8 8 0 1 1-10-12.5L107.19 128L75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 3 6.25Zm48 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Zm56-96v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 144V56H40v144h176Z"
          />
        </g>
      </svg>
    `,
    items: html`
      ${languages.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            <span class="font-sans">${item.name}</span>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Slot: media icon
export const MediaIconSm: Story = {
  name: 'Media icon: sm',
  args: {
    value: activities[0].title,
    label: 'Languages',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[360px]',
    },
    iconSlot: html`
      <svg
        class="nui-listbox-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z"
            opacity=".2"
          />
          <path
            d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
          />
        </g>
      </svg>
    `,
    items: html`
      ${activities.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            ${IconBox({
              size: 'sm',
              children: html`
                <svg
                  class="w-5 h-5 text-muted-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z"
                      opacity=".2"
                    />
                    <path
                      d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
                    />
                  </g>
                </svg>
              `,
            })}
            <div class="nui-listbox-option-inner">
              <h4
                class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-white"
              >
                ${item.title}
              </h4>
              <p class="nui-paragraph nui-paragraph-xs text-muted-400">
                ${item.subtitle}
              </p>
            </div>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const MediaIconMd: Story = {
  name: 'Media icon: md',
  args: {
    value: activities[0].title,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[360px]',
    },
    iconSlot: html`
      <svg
        class="nui-listbox-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z"
            opacity=".2"
          />
          <path
            d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
          />
        </g>
      </svg>
    `,
    items: html`
      ${activities.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            ${IconBox({
              size: 'sm',
              children: html`
                <svg
                  class="w-5 h-5 text-muted-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z"
                      opacity=".2"
                    />
                    <path
                      d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
                    />
                  </g>
                </svg>
              `,
            })}
            <div class="nui-listbox-option-inner">
              <h4
                class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-white"
              >
                ${item.title}
              </h4>
              <p class="nui-paragraph nui-paragraph-xs text-muted-400">
                ${item.subtitle}
              </p>
            </div>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const MediaIconLg: Story = {
  name: 'Media icon: lg',
  args: {
    value: activities[0].title,
    label: 'Languages',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[360px]',
    },
    iconSlot: html`
      <svg
        class="nui-listbox-icon-inner"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 256 256"
      >
        <g fill="currentColor">
          <path
            d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z"
            opacity=".2"
          />
          <path
            d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
          />
        </g>
      </svg>
    `,
    items: html`
      ${activities.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            ${IconBox({
              size: 'sm',
              children: html`
                <svg
                  class="w-5 h-5 text-muted-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <g fill="currentColor">
                    <path
                      d="M141.66 201L129 213.66a8 8 0 0 1-11.32 0L92 188l-33.65 33.66a8 8 0 0 1-11.32 0L34.34 209a8 8 0 0 1 0-11.31L68 164l-25.66-25.64a8 8 0 0 1 0-11.32L55 114.34a8 8 0 0 1 11.32 0l75.3 75.3a8 8 0 0 1 .04 11.36Z"
                      opacity=".2"
                    />
                    <path
                      d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21l-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20l-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28l20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64l83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8ZM52.69 216L40 203.32l28-28L80.68 188Zm70.61-8L48 132.71L60.7 120l75.3 75.31ZM208 100.06l-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z"
                    />
                  </g>
                </svg>
              `,
            })}
            <div class="nui-listbox-option-inner">
              <h4
                class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-white"
              >
                ${item.title}
              </h4>
              <p class="nui-paragraph nui-paragraph-xs text-muted-400">
                ${item.subtitle}
              </p>
            </div>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion

// #region Slot: media img
export const MediaImgSm: Story = {
  name: 'Media img: sm',
  args: {
    value: people[0].name,
    label: 'Languages',
    size: 'sm',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[360px]',
    },
    iconSlot: html`
      ${Avatar({
        size: 'xxs',
        src: people[0].img,
      })}
    `,
    items: html`
      ${people.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            ${Avatar({
              size: 'xs',
              src: item.img,
            })}
            <div class="nui-listbox-option-inner">
              <h4
                class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-white"
              >
                ${item.name}
              </h4>
              <p class="nui-paragraph nui-paragraph-xs text-muted-400">
                ${item.role}
              </p>
            </div>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const MediaImgMd: Story = {
  name: 'Media img: md',
  args: {
    value: people[0].name,
    label: 'Languages',
    size: 'md',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[360px]',
    },
    iconSlot: html`
      ${Avatar({
        size: 'xxs',
        src: people[0].img,
      })}
    `,
    items: html`
      ${people.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            ${Avatar({
              size: 'xs',
              src: item.img,
            })}
            <div class="nui-listbox-option-inner">
              <h4
                class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-white"
              >
                ${item.name}
              </h4>
              <p class="nui-paragraph nui-paragraph-xs text-muted-400">
                ${item.role}
              </p>
            </div>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}

export const MediaImgLg: Story = {
  name: 'Media img: lg',
  args: {
    value: people[0].name,
    label: 'Languages',
    size: 'lg',
    contrast: 'default',
    shape: 'rounded',
    id: 'listbox',
    placeholder: 'Select a language...',
    classes: {
      wrapper: 'min-w-[280px] max-w-[280px] min-h-[360px]',
    },
    iconSlot: html`
      ${Avatar({
        size: 'xxs',
        src: people[0].img,
      })}
    `,
    items: html`
      ${people.map(
        (item, index) => html`
          <div class="nui-listbox-option">
            ${Avatar({
              size: 'xs',
              src: item.img,
            })}
            <div class="nui-listbox-option-inner">
              <h4
                class="nui-heading nui-heading-sm nui-weight-medium text-muted-800 dark:text-white"
              >
                ${item.name}
              </h4>
              <p class="nui-paragraph nui-paragraph-xs text-muted-400">
                ${item.role}
              </p>
            </div>
            ${index === 0
              ? html`
                <div class="nui-listbox-selected-icon">
                  <svg
                    class="nui-listbox-selected-icon-inner"
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
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                </div>
              `
              : ''}
          </div>
        `,
      )}
    `,
  },
}
// #endregion
