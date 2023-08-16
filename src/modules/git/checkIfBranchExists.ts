import { getBranch } from "../api/github/getBranch.js";
import { getConfig } from "../config/getConfig.js";

export const checkIfBranchExists = async (
  repoName: string,
  repoOwner: string,
  branchName: string
) => {
  const branch = await getBranch(repoName, repoOwner, branchName);

  if (branch) {
    return true;
  }

  return false;
};
