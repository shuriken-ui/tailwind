export type ExtractProp<T> = T extends string | number | symbol
  ? Record<T, string>
  : never
export type PropertyVariant<T, C> = T extends keyof C
  ? ExtractProp<C[T]>
  : never
