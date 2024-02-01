import { Box } from './functional.js';

// sanitizeSpecialCharacters :: String -> String
const sanitizSpecialCharacters = (str: string) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// kebabCase :: String -> String
export const kebabCase = (str: string) =>
  Box(str)
    .map(sanitizSpecialCharacters)
    .map((str: string) => str.replace(/[\s]/g, '-'))
    .map((str: string) => str.replace(/[^a-zA-Z0-9-]/g, ''))
    .map((str: string) => str.replace(/-+/g, '-'))
    .map((str: string) => str.replace(/-$/g, ''))
    .map((str: string) => str.toLowerCase())
    .fold();
