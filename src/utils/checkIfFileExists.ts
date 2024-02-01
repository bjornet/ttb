import fs from 'fs';

export const checkIfFileExists = (path: string): boolean => {
  const exists = fs.existsSync(path);
  return exists;
};
