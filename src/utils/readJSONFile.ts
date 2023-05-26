import fs from "fs";

export const readJSONFile = (path: string) => {
  const file = JSON.parse(fs.readFileSync(path).toString());
  return file;
};
