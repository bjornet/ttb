import { Config } from "../types/types.js";

export const getActiveCredentialFromConfig = (
  config: Config | null
): string => {
  if (config) {
    const activeCredential = config.activeCredential;
    return activeCredential;
  }
  return "";
};
