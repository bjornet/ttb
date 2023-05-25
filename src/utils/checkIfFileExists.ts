import fs from "fs";

export const checkIfFileExists = (path: string) => {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.F_OK, (error) => {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
