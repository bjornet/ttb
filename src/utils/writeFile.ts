import fs from "fs";
import { checkIfFileExists } from "./checkIfFileExists.js";

export const writeFile = (path: string, data: string) => {
  const fileExists = checkIfFileExists(path);
  if (fileExists) {
    return;
  }
  fs.writeFileSync(path, data);
};
