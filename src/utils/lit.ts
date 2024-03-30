export function cn(
  ...classNames: (string | string[] | undefined | null | false)[]
) {
  return classNames.flat(Number.POSITIVE_INFINITY).filter(Boolean).join(' ')
}
