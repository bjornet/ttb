import { Credential, CredentialProps } from '../../types/types.js';

export const getActiveCredential = (
  activeCredentialName: string,
  credentials: Credential | null
): CredentialProps | null => {
  if (!credentials) {
    return null;
  }

  return credentials[activeCredentialName];
};
