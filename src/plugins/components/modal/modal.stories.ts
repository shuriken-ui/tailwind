import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { ModalAttrs } from './modal.types'
import { Modal } from './modal.component'
import { Card } from '../card/card.component'
import { ButtonClose } from '../button-close/button-close.component'
import { Avatar } from '../avatar/avatar.component'
import { Button } from '../button/button.component'
import { Heading } from '../heading/heading.component'
import { Paragraph } from '../paragraph/paragraph.component'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Shuriken UI/Base/Modal',
  // tags: ['autodocs'],
  render: (args) => Modal(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: 'md',
    },
  },
} satisfies Meta<ModalAttrs>

export default meta
type Story = StoryObj<ModalAttrs>

// first export is the Primary story

// #region Main
export const Solid: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    '?open': true,
    size: 'md',
    children: html`
      ${Card({
        shape: 'smooth',
        children: html`
          <!-- Header -->
          <div class="flex items-center justify-between p-4 md:p-6">
            ${Heading({
              as: 'h3',
              size: 'lg',
              weight: 'medium',
              classes: {
                wrapper: 'text-muted-900 dark:text-white',
              },
              children: 'Invitation',
            })}
            ${ButtonClose({
              rounded: 'full',
            })}
          </div>
          <!-- Body -->
          <div class="p-4 md:px-6 md:py-8">
            <div class="text-center w-full max-w-xs mx-auto">
              ${Avatar({
                src: 'https://media.cssninja.io/shuriken/avatars/24.svg',
                size: '2xl',
                classes: {
                  wrapper: 'mb-2',
                },
              })}
              ${Heading({
                as: 'h3',
                size: 'lg',
                weight: 'medium',
                classes: {
                  wrapper: 'text-muted-900 dark:text-white',
                },
                children: 'New Invite',
              })}
              ${Paragraph({
                size: 'sm',
                classes: {
                  wrapper: 'text-muted-500 dark:text-muted-400',
                },
                children:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.',
              })}
            </div>
          </div>
          <!-- Footer -->
          <div class="p-4 md:p-6 ">
            <div class="flex justify-end w-full gap-x-2">
              ${Button({
                size: 'md',
                flavor: 'solid',
                rounded: 'md',
                children: 'Cancel',
              })}
              ${Button({
                size: 'md',
                flavor: 'solid',
                rounded: 'md',
                color: 'primary',
                children: 'Confirm',
              })}
            </div>
          </div>
        `,
      })}
    `,
    style: 'min-height: 540px; position: static;',
  },
}
// #endregion

// #region Size: sm
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    open: true,
    size: 'sm',
    children: html`
      ${Card({
        shape: 'smooth',
        children: html`
          <!-- Header -->
          <div class="flex items-center justify-between p-4 md:p-6">
            ${Heading({
              as: 'h3',
              size: 'lg',
              weight: 'medium',
              classes: {
                wrapper: 'text-muted-900 dark:text-white',
              },
              children: 'Invitation',
            })}
            ${ButtonClose({
              shape: 'full',
            })}
          </div>
          <!-- Body -->
          <div class="p-4 md:px-6 md:py-8">
            <div class="text-center w-full max-w-xs mx-auto">
              ${Avatar({
                src: 'https://media.cssninja.io/shuriken/avatars/10.svg',
                size: '2xl',
                classes: {
                  wrapper: 'mb-2',
                },
              })}
              ${Heading({
                as: 'h3',
                size: 'lg',
                weight: 'medium',
                classes: {
                  wrapper: 'text-muted-900 dark:text-white',
                },
                children: 'New Invite',
              })}
              ${Paragraph({
                size: 'sm',
                classes: {
                  wrapper: 'text-muted-500 dark:text-muted-400',
                },
                children:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.',
              })}
            </div>
          </div>
          <!-- Footer -->
          <div class="p-4 md:p-6 ">
            <div class="flex justify-end w-full gap-x-2">
              ${Button({
                size: 'md',
                flavor: 'solid',
                shape: 'smooth',
                children: 'Cancel',
              })}
              ${Button({
                size: 'md',
                flavor: 'solid',
                shape: 'smooth',
                color: 'primary',
                children: 'Confirm',
              })}
            </div>
          </div>
        `,
      })}
    `,
    classes: {
      wrapper: 'w-full !static relative',
      backdrop: '!absolute',
      content: '!absolute',
    },
  },
}
// #endregion
