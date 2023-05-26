import fs from "fs";

export const updateFile = (path: string, data: string) => {
  fs.writeFileSync(path, data);
};
