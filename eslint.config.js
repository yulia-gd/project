import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ігноруємо директорію для білду
  },
  {
    files: ['**/*.{js,jsx}'], // Файли для перевірки
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020
      globals: globals.browser, // Глобальні змінні для браузера
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Рекомендовані правила для React Hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
