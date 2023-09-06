import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { ButtonAction } from './button-action.component'

describe('ButtonAction', () => {
  test('Should render slot', () => {
    const button = ButtonAction({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(button, document.body)

    expect(
      document.body.querySelector('.nui-button-action')?.outerHTML,
    )?.toContain('Hello world')
  })

  test('Should render label', () => {
    const button = ButtonAction({
      label: 'Hello world',
    })

    render(button, document.body)

    expect(
      document.body.querySelector('.nui-button-action')?.outerHTML,
    )?.toContain('Hello world')
  })

  test('Should not render children on loading', () => {
    const button = ButtonAction({
      loading: true,
      children: html`
        <span>Hello world</span>
      `,
    })

    render(button, document.body)

    expect(
      document.body.querySelector('.nui-button-action')?.outerHTML,
    )?.not?.toContain('Hello world')
  })

  test('Should inherit attributes (boolean)', () => {
    const button = ButtonAction({
      children: html`
        <span>Hello world</span>
      `,
      '?disabled': true,
    })

    render(button, document.body)

    expect(
      document.body.querySelector('.nui-button-action')?.outerHTML,
    )?.toContain('disabled')
  })

  test('Should inherit attributes (data-nui)', () => {
    const button = ButtonAction({
      children: html`
        <span>Hello world</span>
      `,
      'data-nui-tooltip': 'test tooltip',
    })

    render(button, document.body)

    expect(
      document.body.querySelector('.nui-button-action')?.outerHTML,
    )?.toContain('test tooltip')
  })

  test('Should have no axe violations', async () => {
    const button = ButtonAction({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(button, document.body)

    expect(
      await axe(document.body.querySelector('.nui-button-action')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
