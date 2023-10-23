import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const readJSONFile = async (path: string): Promise<any> => {
  try {
    const file = await JSON.parse(fs.readFileSync(path).toString());
    return file;
  } catch {
    return null;
  }
};
