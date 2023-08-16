import { shellExec } from "../../utils/execProcess.js";
import { getGitCheckoutCreateNewBranchCommand } from "./getGitCheckoutCreateNewBranchCommand.js";

export const createLocalBranch = async (branchName: string) => {
  try {
    return await shellExec(getGitCheckoutCreateNewBranchCommand(branchName));
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};
