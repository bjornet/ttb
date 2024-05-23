export const getGitCheckoutBranchCommand = (
  branchName: string,
  flag?: string
) => `git checkout ${flag ? flag : ''} ${branchName}`;
