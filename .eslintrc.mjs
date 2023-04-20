module.exports = {
  ignorePatterns: ['*.d.ts'],
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:astro/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    astroHTML: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
      },
    ],
    'import/order': [2, { alphabetize: { order: 'asc' } }],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-set-html-directive': 'error',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:prettier/recommende'
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            'singleQuote': true,
          }
        ],
      },
    },
  ],
}