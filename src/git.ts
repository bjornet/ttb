import { request } from "./client.js";
import { CreateLinkedBranch } from "./graphql/CreateLinkedBranch.js";
import { shellExec } from "./utils/execProcess.js";

export const getGitCheckoutBranchCommand = (branchName: string) =>
  `git checkout -b ${branchName}`;

export const getHeadRef = async () => {
  //TODO needs to cd into the project directory before running this command
  try {
    return await shellExec("git rev-parse HEAD");
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

export const createLinkedBranch = async (
  issueId: number,
  fromBranchSHA: string
) => {
  const trimmedFromBranchSHA = fromBranchSHA.trim();

  const response = await request(CreateLinkedBranch, {
    issueId,
    trimmedFromBranchSHA,
  });

  if (!response) {
    return null;
  }

  return response;
};
