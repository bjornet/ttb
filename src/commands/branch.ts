import { getBranchName } from "../branchName.js";
import { getGitCheckoutBranchCommand } from "../git.js";

export const branch = async (args: any, options: any) => {
  console.log("args", args);
  console.log("options", options);

  /**
   * @todo validate args
   */
  const issueId = Number(args[0]);

  const branchName = await getBranchName(issueId);

  const gitCheckoutBranchCommand = getGitCheckoutBranchCommand(branchName);

  console.log("gitCheckoutBranchCommand", gitCheckoutBranchCommand);
};
