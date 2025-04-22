/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Emulates browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Will contain global matchers
  collectCoverage: true, // Enables code coverage reports
  coverageDirectory: 'coverage', // Output folder for coverage reports
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};