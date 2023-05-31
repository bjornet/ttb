import { Credential } from "../../types/types.js";
import { getConfig } from "./getConfig.js";
import { updateFile } from "../../utils/updateFile.js";

export const addCredential = async (
  credential: Credential
): Promise<boolean> => {
  const { credentials, credentialsPath } = await getConfig();

  credentials && Object.assign(credentials, credential);

  return updateFile(credentialsPath, JSON.stringify(credentials));
};
