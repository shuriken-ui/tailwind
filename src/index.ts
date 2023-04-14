import type { Config } from 'tailwindcss'
import { defu } from 'defu'
import config from './tailwind.config'

export function withShurikenUI(userConfig: Config) {
  return defu(userConfig, config)
}
