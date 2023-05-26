import { getConfig } from "./getConfig.js";
import { updateFile } from "./updateFile.js";

export const makeActive = async (credential: string) => {
  const { config, configPath } = await getConfig();

  const obj = {
    activeCredential: credential,
  };

  config && Object.assign(config, obj);

  updateFile(configPath, JSON.stringify(config));
};
