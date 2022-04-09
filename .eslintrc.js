import { readFileSync } from 'fs';
import { resolve } from 'path';

const prettierOptions = JSON.parse(
  readFileSync(resolve(__dirname, '.prettierrc'), 'utf8'),
);

export const env = {
  browser: true,
  es2021: true,
};

export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 12,
  sourceType: 'module',
};
export const plugins = ['react', 'prettier'];
export const rules = {
  'prettier/prettier': ['warn', prettierOptions],
  'arrow-body-style': [2, 'as-needed'],
};
