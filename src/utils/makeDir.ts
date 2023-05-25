import fs from "fs";
import { checkIfFileExists } from "./checkIfFileExists.js";

export const makeDir = async (path: string) => {
  const dirExists = await checkIfFileExists(path);
  if (dirExists) {
    return;
  }
  fs.mkdirSync(path);
};
