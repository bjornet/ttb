export const kebabCase = (str) =>
  str
    .replace(/[\s]/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9-\/]/g, '')
    .toLowerCase();
