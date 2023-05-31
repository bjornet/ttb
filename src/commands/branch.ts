import ora from "ora";
import { getBranchName } from "../branchName.js";
import {
  checkoutBranch,
  createLinkedBranch,
  getHeadRef,
  gitPull,
} from "../git.js";

export const branch = async (arg: string, options: any) => {
  const spinner = ora("Creating new branch from ticket ID.").start();

  /**
   * @todo validate args
   */
  const issueNumber = Number(arg);

  spinner.start("Creating branch name.");

  const branch = await getBranchName(issueNumber);

  if (!branch) {
    spinner.fail("Branch name could not be created.");
    return;
  }

  const { branchName, issueId } = branch;

  spinner.succeed("Branch name created.");

  spinner.start("Get head branch.");

  const headBranch = await getHeadRef();

  if (!headBranch) {
    spinner.fail("Head branch could not be retrieved.");
    return;
  }

  const linkedBranch = await createLinkedBranch(
    issueId,
    headBranch.output,
    branchName
  );

  if (!linkedBranch) {
    spinner.fail("Linked branch could not be created.");
    return;
  }

  spinner.succeed(`Linked branch created: ${linkedBranch}`);

  const gitPulled = await gitPull();

  if (!gitPulled) {
    spinner.fail("Git pull failed.");
    return;
  }

  const branchCheckedOut = await checkoutBranch(linkedBranch);

  if (!branchCheckedOut) {
    spinner.fail("Branch could not be checked out.");
  }

  spinner.succeed(`Checked out to: ${branchName}`);
};
