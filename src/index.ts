import { Command } from 'commander';
import { getBranchName } from './branchName.js';
import { getGitCheckoutBranchCommand } from './git.js';

const program = new Command();

program
  .option('--type', 'Optional "type of branch"')
  // .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  // .option('--no-cheese', 'plain with no cheese')
  .parse(process.argv);

const main = async () => {
  // const options = program.opts();
  const args = program.args;

  /**
   * @todo validate args
   */
  const issueId = Number(args[0]);

  const branchName = await getBranchName(issueId);

  const gitCheckoutBranchCommand = getGitCheckoutBranchCommand(branchName);

  console.log('---------------------------------------------')
  console.log('---------Git Checkout Branch Command---------')
  console.log(gitCheckoutBranchCommand)
  console.log('---------------------------------------------')
  console.log('---------------------------------------------')
};

main();
