import { shellExec } from "../../utils/execProcess.js";
import { getGitCheckoutBranchCommand } from "./getGitCheckoutBranchCommand.js";

export const checkoutBranch = async (branchName: string) => {
  try {
    return await shellExec(getGitCheckoutBranchCommand(branchName));
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};
