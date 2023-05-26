import fs from "fs";

export const readJSONFile = async (path: string): Promise<any> => {
  try {
    const file = await JSON.parse(fs.readFileSync(path).toString());
    return file;
  } catch {
    return null;
  }
};
