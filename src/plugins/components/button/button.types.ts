export interface ButtonProps {
  label?: string
  loading?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
  flavor?: 'solid' | 'pastel' | 'outline'
  color?:
    | 'default'
    | 'light'
    | 'muted'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'none'
  shadow?: 'flat' | 'hover'
}

export interface ButtonEvents {
  onClick?: () => void
}

export interface ButtonSlots {
  children: any
}

export type ButtonAttrs = ButtonProps & ButtonEvents & ButtonSlots
