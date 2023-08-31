import { withShurikenUI } from './src'

export default withShurikenUI({
  content: [
    // './.storybook/*.ts',
    './src/**/*.component.ts',
    './src/**/*.variants.ts',
    './src/**/*.stories.ts',
    './src/**/*.docs.mdx',
  ],
})