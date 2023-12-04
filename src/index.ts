import type { ShurikenUIConfig } from './schema'
import { preset, hasPreset } from './preset'

export * from './preset'

export function withShurikenUI(config: ShurikenUIConfig) {
  if (hasPreset(config)) {
    return config
  }

  config.presets ??= []
  config.presets.push(preset)

  return config
}
