import ora from "ora";
import { getBranchName } from "../branchName.js";
import {
  createLinkedBranch,
  getGitCheckoutBranchCommand,
  getHeadRef,
} from "../git.js";

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

  spinner.start("Get head branch.");

  const headBranch = await getHeadRef();

  if (!headBranch) {
    spinner.fail("Head branch could not be retrieved.");
    return;
  }

  const linkedBranch = await createLinkedBranch(issueId, headBranch.output);

  if (!linkedBranch) {
    spinner.fail("Linked branch could not be created.");
    return;
  }

  console.log("linkedBranch: ", linkedBranch.ref.name);

  spinner.succeed(`Linked branch created: ${linkedBranch.ref.name}`);

  // spinner.succeed(`Head branch: ${headBranch.output}`);

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
