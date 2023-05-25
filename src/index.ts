import { Command } from "commander";
import { getBranchName } from "./branchName.js";
import { getGitCheckoutBranchCommand } from "./git.js";
import { init } from "./commands/init.js";

const program = new Command();

program.addHelpText(
  "before",
  `
    🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
    🎫                    🎫 🎫
    🎫                       🎫
    🎫    Ticket to Branch   🎫
    🎫                       🎫
    🎫                       🎫
    🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
`
);

program.option("--type", 'Optional "type of branch"');
// .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
// .option('--no-cheese', 'plain with no cheese')

program.command("init").description("Set up Ticket to Branch").action(init);

program.parse(process.argv);

const main = async () => {
  const options = program.opts();
  const args = program.args;

  console.log("options", options);
  console.log("args", args);

  await init();
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

// main();
