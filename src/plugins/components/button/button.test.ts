import { axe } from 'vitest-axe'
import { expect, test, describe } from 'vitest'
import { render, html } from 'lit'

import { Button } from './button.component'

describe('Button', () => {
  test('Should render slot', () => {
    const button = Button({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(button, document.body)

    expect(document.body.querySelector('.nui-button')?.outerHTML)?.toContain(
      'Hello world',
    )
  })

  test('Should render label', () => {
    const button = Button({
      label: 'Hello world',
    })

    render(button, document.body)

    expect(document.body.querySelector('.nui-button')?.outerHTML)?.toContain(
      'Hello world',
    )
  })

  test('Should not render children on loading', () => {
    const button = Button({
      loading: true,
      children: html`
        <span>Hello world</span>
      `,
    })

    render(button, document.body)

    expect(
      document.body.querySelector('.nui-button')?.outerHTML,
    )?.not?.toContain('Hello world')
  })

  test('Should inherit attributes (boolean)', () => {
    const button = Button({
      children: html`
        <span>Hello world</span>
      `,
      '?disabled': true,
    })

    render(button, document.body)

    expect(document.body.querySelector('.nui-button')?.outerHTML)?.toContain(
      'disabled',
    )
  })

  test('Should inherit attributes (data-nui)', () => {
    const button = Button({
      children: html`
        <span>Hello world</span>
      `,
      'data-nui-tooltip': 'test tooltip',
    })

    render(button, document.body)

    expect(document.body.querySelector('.nui-button')?.outerHTML)?.toContain(
      'test tooltip',
    )
  })

  test('Should have no axe violations', async () => {
    const button = Button({
      children: html`
        <span>Hello world</span>
      `,
    })

    render(button, document.body)

    expect(
      await axe(document.body.querySelector('.nui-button')!.outerHTML),
    )?.toHaveNoViolations()
  })
})
