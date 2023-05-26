import os from "os";
import { readJSONFile } from "./readJSONFile.js";
import { checkIfFileExists } from "./checkIfFileExists.js";

export const getConfig = () => {
  const homeDir = os.homedir();
  const dirName = ".ttb";
  const fileName = "credentials.json";
  const configDirPath = `${homeDir}/${dirName}`;
  const configFullPath = `${homeDir}/${dirName}/${fileName}`;
  const configExists = checkIfFileExists(configFullPath);

  /**
   * @todo read config file and return config object
   */
  if (!configExists) {
    return { config: undefined, configFullPath, configDirPath };
  }

  const config = readJSONFile(configFullPath);

  return { config, configFullPath, configDirPath, configExists };
};
