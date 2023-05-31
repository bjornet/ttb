import { Credential } from "../../types/types.js";
import { getConfig } from "./getConfig.js";
import { updateFile } from "../../utils/updateFile.js";

export const removeCredential = async (
  credential: string
): Promise<boolean> => {
  const { credentials, credentialsPath } = await getConfig();
  if (!credentials) {
    return false;
  }

  delete credentials[credential as keyof Credential];

  return updateFile(credentialsPath, JSON.stringify(credentials));
};
