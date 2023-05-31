import { request } from "./client.js";
import { CreateLinkedBranch } from "./graphql/CreateLinkedBranch.js";
import { shellExec } from "./utils/execProcess.js";

export const getGitCheckoutBranchCommand = (branchName: string) =>
  `git checkout ${branchName}`;

export const gitPull = async () => {
  try {
    return await shellExec("git pull");
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const checkoutBranch = async (branchName: string) => {
  try {
    return await shellExec(getGitCheckoutBranchCommand(branchName));
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const getHeadRef = async () => {
  try {
    return await shellExec("git rev-parse HEAD");
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const createLinkedBranch = async (
  issueId: number,
  fromBranchSHA: string,
  name: string
) => {
  const trimmedFromBranchSHA = fromBranchSHA.trim();

  const response = await request(CreateLinkedBranch, {
    issueId,
    sha: trimmedFromBranchSHA,
    name,
  });

  if (!response) {
    return null;
  }

  return response.createLinkedBranch.linkedBranch.ref.name;
};
