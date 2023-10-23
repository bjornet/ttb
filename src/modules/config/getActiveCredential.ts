import { CredentialProps } from "../../types/types.js";

export const getActiveCredential = (
  activeCredentialName: string,
  credentials: any
): CredentialProps | null => {
  if (!credentials) {
    return null;
  }

  return credentials[activeCredentialName];
};
