// eslint.config.js
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // TypeScript ESLint provides recommended configuration with proper language options
  ...tseslint.configs.recommended,

  // Prettier config
  {
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
    },
    rules: {
      'prettier/prettier': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          ts: 'never',
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-use-before-define': 'off',
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
  },
  // Incorporate Prettier as ESLint rules
  prettierConfig
);
