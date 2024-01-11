import { mergePlugins } from '../register'

import bgShades from './bg-shades'
import textShades from './text-shades'

export { default as bgShades } from './bg-shades'
export { default as textShades } from './text-shades'

export const utilities = mergePlugins([bgShades, textShades])
