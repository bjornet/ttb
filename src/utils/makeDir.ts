import fs from "fs";
import { checkIfFileExists } from "./checkIfFileExists.js";

export const makeDir = (path: string) => {
  const dirExists = checkIfFileExists(path);
  if (dirExists) {
    return;
  }
  fs.mkdirSync(path);
};
