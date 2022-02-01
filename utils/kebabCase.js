import { Box } from "../utils/functional.js";

// sanitizeSpecialCharacters :: String -> String
const sanitizSpecialCharacters = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// kebabCase :: String -> String
export const kebabCase = (str) =>
  Box(str)
    .map(sanitizSpecialCharacters)
    .map((str) => str.replace(/[\s]/g, "-"))
    .map((str) => str.replace(/[^a-zA-Z0-9-]/g, ""))
    .map((str) => str.replace(/-+/g, "-"))
    .map((str) => str.replace(/-$/g, ""))
    .map((str) => str.toLowerCase())
    .fold();
