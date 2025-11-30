// jest.config.ts

export default {
  // Use the jsdom environment to simulate a browser 
  testEnvironment: 'jsdom',

  // Configuration for processing TypeScript and JavaScript files
  preset: 'ts-jest', 

  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx', 
        esModuleInterop: true, 
      },
    },
  },

  // Ignore the node_modules folder when searching for tests
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],

  // Specify that Jest should process .ts, .tsx, .js, and .jsx files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Specify the path to the file that will be run before each test 
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 

  // Pattern for searching test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
};