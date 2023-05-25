import fs from "fs";
import { checkIfFileExists } from "./checkIfFileExists.js";

export const writeFile = async (path: string, data: string) => {
  const fileExists = await checkIfFileExists(path);
  if (fileExists) {
    return;
  }
  fs.writeFileSync(path, data);
};
