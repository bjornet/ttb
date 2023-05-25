import { Command } from "commander";
import { getBranchName } from "./branchName.js";
import { getGitCheckoutBranchCommand } from "./git.js";

const program = new Command();

program
  .option("--type", 'Optional "type of branch"')
  // .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  // .option('--no-cheese', 'plain with no cheese')
  .parse(process.argv);

const main = async () => {
  // const options = program.opts();
  const args = program.args;

  // kolla om credentials finns
  // if (!credentials) {
  // skapa credentials
  // }
  // if (credentials) {
  // kolla om credentials är giltiga
  // if (credentials är giltiga) {
  // kör programmet
  // }
  // if (credentials inte är giltiga) {
  // meddela att credentials inte är giltiga
  // }

  /**
   * @todo validate args
   */
  const issueId = Number(args[0]);

  const branchName = await getBranchName(issueId);

  const gitCheckoutBranchCommand = getGitCheckoutBranchCommand(branchName);

  console.log("---------------------------------------------");
  console.log("---------Git Checkout Branch Command---------");
  console.log(gitCheckoutBranchCommand);
  console.log("---------------------------------------------");
  console.log("---------------------------------------------");
};

main();
