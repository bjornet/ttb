import { getBranch } from '../api/github/getBranch.js';

export const checkIfBranchExists = async (
  repoName: string,
  repoOwner: string,
  branchName: string
) => {
  const branch = await getBranch(repoName, repoOwner, branchName);

  if (!branch) {
    return false;
  }

  return true;
};
