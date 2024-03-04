import { html } from 'lit'
import { spread } from '@open-wc/lit-helpers'

import type { InputFileAttrs } from './input-file.types'
import * as variants from './input-file.variants'

/**
 * Primary UI component for user interaction
 */
export const InputFile = ({
  rounded = 'sm',
  color = 'primary',
  type = 'combo',
  classes,
  ...attrs
}: InputFileAttrs) => {
  return html`
    ${type === 'combo'
      ? html`
          <label
            class=${[
              'nui-input-file',
              rounded && variants.rounded[rounded],
              color && variants.color[color],
              type === 'combo' && 'nui-input-file-combo',
              classes?.wrapper,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <span class="nui-combo-label-text">Choose profile photo</span>
            <input type="file" class="nui-combo-input" ${spread(attrs)} />
          </label>
        `
      : ''}
    ${type === 'dropzone'
      ? html`
          <div
            class=${[
              'nui-input-file',
              rounded && variants.rounded[rounded],
              color && variants.color[color],
              type === 'dropzone' && 'nui-input-file-drop',
              classes?.wrapper,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div class="nui-drop-area-inner">
              <div class="nui-drop-zone">
                <svg
                  class="nui-drop-zone-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37l.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10m6.5 7v-5.25L14.25 14l.75-.66l-3.5-3.5l-3.5 3.5l.75.66L11 11.75V17h1Z"
                  />
                </svg>
                <span class="nui-drop-zone-text">Drag your files here</span>
                <span class="nui-drop-zone-separator">or</span>
                <span class="nui-drop-zone-text">Browse files</span>
              </div>
            </div>
            <input
              type="file"
              class="nui-drop-zone-input"
              ${spread(attrs)}
              placeholder="upload file"
            />
          </div>
        `
      : ''}
    ${type === 'button'
      ? html`
          <label
            class=${[
              'nui-input-file',
              color && variants.color[color],
              rounded && variants.rounded[rounded],
              type === 'button' && 'nui-input-file-button',
              classes?.wrapper,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <svg
              class="nui-upload-button-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37l.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10m6.5 7v-5.25L14.25 14l.75-.66l-3.5-3.5l-3.5 3.5l.75.66L11 11.75V17h1Z"
              />
            </svg>
            <span class="nui-upload-button-label">Select a file</span>
            <input type="file" class="hidden" ${spread(attrs)} />
          </label>
        `
      : ''}
  `
}
