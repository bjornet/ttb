#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./modules/commands/init.js";
import { add } from "./modules/commands/add.js";
import { use } from "./modules/commands/use.js";
import { remove } from "./modules/commands/remove.js";
import { branch } from "./modules/commands/branch.js";

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
  .argument("<ticket-id>", "ticket id to create branch from")
  .option("--type <type>", "type of branch", "feature")
  .action((args, option) => branch(args, option));

program.parse(process.argv);
