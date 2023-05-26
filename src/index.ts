import { Command } from "commander";
import { getBranchName } from "./branchName.js";
import { getGitCheckoutBranchCommand } from "./git.js";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";
import { use } from "./commands/use.js";
import { remove } from "./commands/remove.js";

const program = new Command();

program.addHelpText(
  "before",
  `
    🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
    🎫                        🎫
    🎫                        🎫
    🎫    Ticket to Branch    🎫
    🎫                        🎫
    🎫                        🎫
    🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
`
);

program.option("--type", 'Optional "type of branch"');

program.command("init").description("Set up Ticket to Branch").action(init);

program.command("add").description("Add a credential").action(add);

program.command("use").description("Choose active credential").action(use);

program.command("remove").description("Remove a credential").action(remove);

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
