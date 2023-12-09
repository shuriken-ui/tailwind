import { withShurikenUI } from './src'

export default withShurikenUI({
  content: [
    // './.storybook/*.ts',
    './src/**/*.index.ts',
    './src/**/*.component.ts',
    './src/**/*.variants.ts',
    './src/**/*.stories.ts',
    './src/**/*.doc.mdx',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
})
