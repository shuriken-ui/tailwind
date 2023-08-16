import { html } from 'lit'

export interface ButtonProps {
  loading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  flavor?: 'solid' | 'pastel' | 'outline'
  color?:
    | 'default'
    | 'light'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  shadow?: 'flat' | 'hover'
  label: string
  onClick?: () => void
}

const sizeStyle = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
  xl: 'nui-button-big',
}
const shapeStyle = {
  straight: '',
  rounded: 'nui-button-rounded',
  curved: 'nui-button-curved',
  smooth: 'nui-button-smooth',
  full: 'nui-button-full',
}
const flavorStyle = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
}
const colorStyle = {
  none: '',
  default: 'nui-button-default',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  light: 'nui-button-light',
  muted: 'nui-button-muted',
}
const shadowStyle = {
  flat: 'nui-button-shadow',
  hover: 'nui-button-shadow-hover',
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  loading,
  shadow,
  shape,
  flavor = 'solid',
  size = 'md',
  color = 'default',
  onClick,
}: ButtonProps) => {
  return html`
    <button
      type="button"
      class=${[
        'nui-button',
        sizeStyle[size],
        flavorStyle[flavor],
        colorStyle[color],
        loading && 'nui-button-loading',
        shape && shapeStyle[shape],
        shadow && shadowStyle[shadow],
      ]
        .filter(Boolean)
        .join(' ')}
      @click=${onClick}
    >
      <span>${label}</span>
    </button>
  `
}
