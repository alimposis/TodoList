/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  transform: {
    '^.+\\.(js|jsx|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/src/**/*.(test|spec).[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;