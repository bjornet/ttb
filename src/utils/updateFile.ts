import fs from 'fs';

export const updateFile = (path: string, data: string): boolean => {
  try {
    fs.writeFileSync(path, data);
    return true;
  } catch {
    return false;
  }
};
