import fs from "fs";
import os from "os";

export const getConfig = async () => {
  const homeDir = os.homedir();
  const dirName = ".ttb";
  const fileName = "credentials.json";
  const configDirPath = `${homeDir}/${dirName}`;
  const configFullPath = `${homeDir}/${dirName}/${fileName}`;

  /**
   * @todo read config file and return config object
   */
  const config = {};

  return { config, configFullPath, configDirPath };
};
