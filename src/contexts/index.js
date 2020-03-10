import { createContext } from 'react';

export const consoleContext = createContext({
  logs: []
});

export const codeContext = createContext({
  code: '',
  exercise: ''
});
