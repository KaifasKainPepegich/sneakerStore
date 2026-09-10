import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'dist-ssr', 'coverage', 'playwright-report', 'test-results']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'prefer-arrow-functions': preferArrowFunctions,
    },
    rules: {
      'prefer-arrow-functions/prefer-arrow-functions': ['error', { returnStyle: 'unchanged' }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message: 'Используй именованный экспорт: export const Component = () => { ... };',
        },
      ],
    },
  },
  eslintConfigPrettier,
]);
