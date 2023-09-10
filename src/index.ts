import type { Config } from 'tailwindcss'
import { preset, hasPreset } from './preset'

export * from './preset'

export function withShurikenUI(config: Config) {
  if (hasPreset(config)) {
    return config
  }

  config.presets ??= []
  config.presets.push(preset)

  return config
}
