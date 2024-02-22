/** @type {import("prettier").Config} */
const baseOptions = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  trailingComma: 'none',
  printWidth: 60
}

const config = {
  semi: false,
  overrides: [
    {
      files: ["src/main/index.js"],
      options: {
        ...baseOptions
      },
    },
    {
      files: ["src/renderer/preload.js"],
      options: {
        ...baseOptions
      },
    },
    {
      files: ["src/ui/**/*.js"],
      options: {
        ...baseOptions
      },
    },
  ],
}

module.exports = config
