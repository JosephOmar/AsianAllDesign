const path = require('path');

module.exports = {
  preset: 'ts-jest', // Para manejar TypeScript
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Permite transformar tanto JS como TS
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock de estilos
    '^@/(.*)$': '<rootDir>/src/$1', // Mapeo del alias "@"
  },
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'), // Para resolver módulos dentro de `src`
  ],
};
