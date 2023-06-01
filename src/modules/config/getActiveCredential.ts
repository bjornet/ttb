import { Credential } from "../../types/types.js";

export const getActiveCredential = (
  activeCredentialName: string,
  credentials: any
): Credential | null => {
  if (!credentials) {
    return null;
  }

  return credentials[activeCredentialName];
};
