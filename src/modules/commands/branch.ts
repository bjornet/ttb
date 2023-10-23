import ora from 'ora';
import { getBranchName } from '../git/branchName.js';
import { createLinkedBranch } from '../api/github/createLinkedBranch.js';
import { getHeadRef } from '../git/getHeadRef.js';
import { gitPull } from '../git/gitPull.js';
import { checkoutBranch } from '../git/checkoutBranch.js';
import { createLocalBranch } from '../git/createLocalBranch.js';
import { checkIfBranchExists } from '../git/checkIfBranchExists.js';
import { getConfig } from '../config/getConfig.js';
import { OptionValues } from 'commander';

export const branch = async (arg: string, options: OptionValues) => {
  const spinner = ora('Creating new branch from ticket ID.').start();

  const { activeCredential } = await getConfig();

  if (!activeCredential) {
    spinner.fail('No active credential.');
    return;
  }

  /**
   * @todo validate args
   */
  const issueNumber = Number(arg);

  spinner.start('Creating branch name.');

  const branch = await getBranchName(issueNumber, options.type);

  if (!branch) {
    spinner.fail('Branch name could not be created.');
    return;
  }

  const { branchName, issueId } = branch;

  spinner.succeed('Branch name created.');

  spinner.start('Get head branch.');

  const headBranch = await getHeadRef();

  if (!headBranch) {
    spinner.fail('Head branch could not be retrieved.');
    return;
  }

  const branchExists = await checkIfBranchExists(
    activeCredential.repo,
    activeCredential.owner,
    branchName
  );

  if (branchExists) {
    spinner.fail('Branch already exists.');
    return;
  }

  const linkedBranch = await createLinkedBranch(issueId, headBranch.output, branchName);

  if (!linkedBranch) {
    spinner.fail('Linked branch could not be created.');

    spinner.start('Creating local branch instead');

    const newLocalBranch = await createLocalBranch(branchName);

    if (!newLocalBranch) {
      spinner.fail('Local branch could not be created');
      return;
    }

    spinner.succeed(`Checked out to local branch: ${branchName}`);
    return;
  }

  spinner.succeed(`Linked branch created: ${linkedBranch}`);

  const gitPulled = await gitPull();

  if (!gitPulled) {
    spinner.fail('Git pull failed.');
    return;
  }

  const branchCheckedOut = await checkoutBranch(linkedBranch);

  if (!branchCheckedOut) {
    spinner.fail('Branch could not be checked out.');
  }

  spinner.succeed(`Checked out to: ${branchName}`);
};
