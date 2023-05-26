import { GitHubCredential } from "./createGitHubCredential.js";
import { getConfig } from "./getConfig.js";
import { updateFile } from "./updateFile.js";

type Credential = GitHubCredential;

export const addCredential = (data: Credential | undefined) => {
  const { config, configFullPath } = getConfig();

  config && Object.assign(config, data);

  updateFile(configFullPath, JSON.stringify(config));
};
