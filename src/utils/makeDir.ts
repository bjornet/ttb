import fs from 'fs';

export const makeDir = (path: string): boolean => {
  try {
    fs.mkdirSync(path);
    return true;
  } catch {
    return false;
  }
};
