import ora from "ora";
import { getBranchName } from "../branchName.js";
import { getGitCheckoutBranchCommand } from "../git.js";

export const branch = async (arg: string, options: any) => {
  const spinner = ora("Creating new branch from ticket ID.").start();

  /**
   * @todo validate args
   */
  const issueId = Number(arg);

  spinner.start("Creating branch name.");

  const branchName = await getBranchName(issueId);

  if (!branchName) {
    spinner.fail("Branch name could not be created.");
    return;
  }

  spinner.succeed("Branch name created.");

  spinner.start("Checking out new branch.");

  const gitCheckoutBranchCommand = getGitCheckoutBranchCommand(branchName);

  if (!gitCheckoutBranchCommand) {
    spinner.fail("Branch could not be checked out.");
    return;
  }

  spinner.succeed("Branch checked out.");

  console.log(
    "gitCheckoutBranchCommand should check run this command: ",
    gitCheckoutBranchCommand
  );
};
