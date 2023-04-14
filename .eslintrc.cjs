module.exports = {
  root: true,
  extends: [
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['unicorn', 'tailwindcss', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    tailwindcss: {
      config: 'tailwind/default.config.ts',
    },
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
        // 'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'unicorn/filename-case': 'error',
      },
    },
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-unused-vars': 'off',
    'no-undef': 'off',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',

    // 'vue/require-expose': 'error',

    // 'import/default': 'off',
    //   'vue/script-setup-uses-vars': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
}
