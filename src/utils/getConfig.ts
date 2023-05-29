import os from "os";
import { readJSONFile } from "./readJSONFile.js";
import { checkIfFileExists } from "./checkIfFileExists.js";
import { Config } from "../types/types.js";
import { getActiveCredentialFromConfig } from "./getActiveCredentialFromConfig.js";

export const getConfig = async () => {
  const homeDir = os.homedir();
  const dirName = ".ttb";
  const credentialsFileName = "credentials.json";
  const configFileName = "config.json";
  const configDirPath = `${homeDir}/${dirName}`;
  const configPath = `${homeDir}/${dirName}/${configFileName}`;
  const credentialsPath = `${homeDir}/${dirName}/${credentialsFileName}`;
  const credentialsExists = checkIfFileExists(credentialsPath);
  const configExists = checkIfFileExists(configPath);
  const configDirExists = checkIfFileExists(configDirPath);
  const config: Config | null = await readJSONFile(configPath);
  const credentials: Credential[] | null = await readJSONFile(credentialsPath);
  const activeCredential = getActiveCredentialFromConfig(config);

  return {
    activeCredential,
    credentials,
    credentialsPath,
    credentialsExists,
    config,
    configPath,
    configDirPath,
    configDirExists,
    configExists,
  };
};
