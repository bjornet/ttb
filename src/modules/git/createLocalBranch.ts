import { shellExec } from '../../utils/execProcess.js';
import { getGitCheckoutBranchCommand } from './getGitCheckoutBranchCommand.js';

const BRANCH_FLAG = '-b';

export const createLocalBranch = async (branchName: string) => {
  try {
    return await shellExec(getGitCheckoutBranchCommand(branchName, BRANCH_FLAG));
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
};
