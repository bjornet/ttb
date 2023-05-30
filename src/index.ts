import { Command } from "commander";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";
import { use } from "./commands/use.js";
import { remove } from "./commands/remove.js";
import { branch } from "./commands/branch.js";

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

program.command("init").description("Set up Ticket to Branch").action(init);

program.command("add").description("Add a credential").action(add);

program.command("use").description("Choose active credential").action(use);

program.command("remove").description("Remove a credential").action(remove);

program
  .command("branch")
  .description("Create a branch")
  .argument("<string>", "Ticket id")
  .option("-t", "--type <string>", 'Optional "type of branch"')
  .action((args, options) => branch(args, options));

program.parse(process.argv);
