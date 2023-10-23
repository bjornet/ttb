import os from 'os';
import { readJSONFile } from '../../utils/readJSONFile.js';
import { checkIfFileExists } from '../../utils/checkIfFileExists.js';
import { Config, Credential } from '../../types/types.js';
import { getActiveCredentialName } from './getActiveCredentialName.js';
import { getActiveCredential } from './getActiveCredential.js';

export const getConfig = async () => {
  const homeDir = os.homedir();
  const dirName = '.ttb';
  const credentialsFileName = 'credentials.json';
  const configFileName = 'config.json';
  const configDirPath = `${homeDir}/${dirName}`;
  const configPath = `${homeDir}/${dirName}/${configFileName}`;
  const credentialsPath = `${homeDir}/${dirName}/${credentialsFileName}`;
  const credentialsExists = checkIfFileExists(credentialsPath);
  const configExists = checkIfFileExists(configPath);
  const configDirExists = checkIfFileExists(configDirPath);
  const config: Config | null = await readJSONFile(configPath);
  const credentials: Credential | null = await readJSONFile(credentialsPath);
  const activeCredentialName = getActiveCredentialName(config);
  const activeCredential = getActiveCredential(activeCredentialName, credentials);

  return {
    activeCredential,
    activeCredentialName,
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
