import { getConfig } from "./getConfig.js";
import { updateFile } from "./updateFile.js";

export const makeActive = async (credential: string): Promise<boolean> => {
  const { config, configPath } = await getConfig();

  const obj = {
    activeCredential: credential,
  };

  config && Object.assign(config, obj);

  return updateFile(configPath, JSON.stringify(config));
};
