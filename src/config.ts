import type { Config } from 'tailwindcss'
import { preset } from './preset'

export default {
  content: [],
  presets: [preset as any],
} satisfies Config
