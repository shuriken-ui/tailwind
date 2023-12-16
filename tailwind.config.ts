import { withShurikenUI } from './src'

export default withShurikenUI({
  content: [
    './src/**/*.component.ts',
    './src/**/*.variants.ts',
    './src/**/*.stories.ts',
    './src/**/*.doc.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
})
