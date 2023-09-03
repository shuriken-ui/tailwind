import type { Config } from 'tailwindcss'
import { preset, hasPreset } from './preset'

export * from './preset'

export function withShurikenUI(config: Config) {
  console.log('withShurikenUI', config)
  if (hasPreset(config)) {
    return config
  }

  config.presets ??= []
  config.presets.push(preset)

  return config
}
