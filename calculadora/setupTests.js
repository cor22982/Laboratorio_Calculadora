// setupTests.js
import '@testing-library/jest-dom';
// jest.config.js
module.exports = {
  // Otras configuraciones...
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
