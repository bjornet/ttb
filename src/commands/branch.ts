import { getBranchName } from "../branchName.js";
import { getGitCheckoutBranchCommand } from "../git.js";

export const branch = async (arg: string, options: any) => {
  /**
   * @todo validate args
   */
  const issueId = Number(arg);

  const branchName = await getBranchName(issueId);

  const gitCheckoutBranchCommand = getGitCheckoutBranchCommand(branchName);

  console.log("gitCheckoutBranchCommand", gitCheckoutBranchCommand);
};
