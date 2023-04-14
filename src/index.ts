import type { Config } from 'tailwindcss'
import { defu } from 'defu'
import config from './config'

export function withShurikenUI(userConfig: Config) {
  return defu(userConfig, config)
}
