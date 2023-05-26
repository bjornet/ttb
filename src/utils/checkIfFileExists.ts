import fs from "fs";

export const checkIfFileExists = (path: string) => {
  const exists = fs.existsSync(path);
  return exists;
};
