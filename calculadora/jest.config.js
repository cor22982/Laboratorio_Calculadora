// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};

