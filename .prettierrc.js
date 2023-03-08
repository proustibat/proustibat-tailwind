module.exports = {
  plugins: [
    'prettier-plugin-organize-imports',
    'prettier-plugin-organize-attributes',
    require('prettier-plugin-tailwindcss'),
  ],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
};
