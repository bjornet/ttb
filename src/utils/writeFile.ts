import fs from "fs";
import { checkIfFileExists } from "./checkIfFileExists.js";

export const writeFile = (path: string, data: string): boolean => {
  try {
    fs.writeFileSync(path, data);
    return true;
  } catch {
    return false;
  }
};
