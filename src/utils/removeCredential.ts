import { Credential } from "../types/types.js";
import { getConfig } from "./getConfig.js";
import { updateFile } from "./updateFile.js";

export const removeCredential = async (credential: string) => {
  const { credentials, credentialsPath } = await getConfig();
  if (!credentials) {
    return;
  }

  delete credentials[credential as keyof Credential];

  updateFile(credentialsPath, JSON.stringify(credentials));
};
