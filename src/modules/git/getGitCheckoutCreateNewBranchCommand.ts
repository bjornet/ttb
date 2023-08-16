export const getGitCheckoutCreateNewBranchCommand = (branchName: string) =>
  `git checkout -b ${branchName}`;
