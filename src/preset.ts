import type { ShurikenUIConfig } from './schema'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

import { base, components, utilities } from './plugins'
import { defaultTheme } from './themes'

const ShurikenUISymbol = '__is_shuriken_ui'

/**
 * Test if a tailwind config has the shuriken-ui preset already added
 */
export function hasPreset(config: ShurikenUIConfig) {
  if (config.presets && Array.isArray(config.presets)) {
    return config.presets.some((preset) => preset && ShurikenUISymbol in preset)
  }

  return false
}

/**
 * Create a shuriken-ui preset, optionally with a custom theme and custom plugins list
 */
export function createPreset({
  theme = defaultTheme,
  plugins = [
    // tailwindcss plugins
    typography,
    containerQueries,
    // shuriken-ui plugins
    base,
    components,
    utilities,
  ],
}: {
  theme?: ShurikenUIConfig['theme']
  plugins?: ShurikenUIConfig['plugins']
} = {}) {
  const config = {
    darkMode: 'class',
    content: [],
    plugins,
    theme,
  } satisfies ShurikenUIConfig

  // set a hidden symbol so we can detect if the user has already added the preset
  Object.defineProperty(config, ShurikenUISymbol, {
    value: true,
    enumerable: false,
    writable: false,
  })

  return config
}

/**
 * The default shuriken-ui preset
 */
export const preset = createPreset()
