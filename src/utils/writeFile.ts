import fs from 'fs';

export const writeFile = (path: string, data: string): boolean => {
  try {
    fs.writeFileSync(path, data);
    return true;
  } catch {
    return false;
  }
};
