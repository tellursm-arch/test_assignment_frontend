// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([...nextVitals, ...nextTs, {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-multi-spaces': 'error',
    'space-before-blocks': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
  },
}, globalIgnores([
  ".storybook/**/*",
  ".next/**",
  "out/**",
  "build/**",
  "next-env.d.ts",
  "node_modules/**"
]), ...storybook.configs["flat/recommended"]]);

export default eslintConfig;
