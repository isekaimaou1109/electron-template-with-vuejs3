/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@components/(.*)": "<rootDir>/src/ui/components/$1",
    "^@stores/(.*)": "<rootDir>/src/ui/stores/$1",
    "^@locales/(.*)": "<rootDir>/src/ui/locales/$1"
  }
};

module.exports = config;
