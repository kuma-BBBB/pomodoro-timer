export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '.coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/components/atoms$': '<rootDir>/src/components/atoms',
    '^@/hooks$': '<rootDir>/src/hooks',
    '^@/store$': '<rootDir>/src/store',
    '^@/utils$': '<rootDir>/src/utils',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/*.spec.tsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
