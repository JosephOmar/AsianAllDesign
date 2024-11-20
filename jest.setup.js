jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Importa React dentro del mock para evitar problemas de alcance
    const React = require('react');
    return React.createElement('img', props);
  },
}));
