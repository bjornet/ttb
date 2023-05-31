import { Config } from "../../types/types.js";

export const getActiveCredentialName = (config: Config | null): string => {
  if (config) {
    const activeCredential = config.activeCredential;
    return activeCredential;
  }
  return "";
};
