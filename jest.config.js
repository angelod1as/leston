module.exports = {
  collectCoverageFrom: ['src/**/!(*.stories).{ts,tsx}', '!**/styles.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  // moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@test/(.*)': '<rootDir>/src/test/$1',
  },
}
