import { getConfig } from "../utils/getConfig.js";
import ora from "ora";
import { select } from "../utils/questions/select.js";
import { createGitHubCredential } from "../utils/createGitHubCredential.js";
import { addCredential } from "../utils/addCredential.js";
import { makeActive } from "../utils/makeActive.js";

export const add = async () => {
  const spinner = ora("Add credential process started.").start();

  const { credentialsPath, credentialsExists } = await getConfig();

  let projectManagementSystem;
  let newCredential;

  if (!credentialsExists) {
    spinner.fail('You must run "ttb init" before you can add a credential.');
    return;
  }

  spinner.stop();

  projectManagementSystem = await select(
    "What project management system are you using?",
    ["GitHub", "Jira", "Trello"]
  );

  if (projectManagementSystem && projectManagementSystem === "GitHub") {
    newCredential = await createGitHubCredential();
  }

  if (projectManagementSystem && projectManagementSystem === "Jira") {
    spinner.fail("Jira is not yet supported");
    return;
  }

  if (projectManagementSystem && projectManagementSystem === "Trello") {
    spinner.fail("Trello is not yet supported");
    return;
  }

  spinner.start("Editing config file");

  await addCredential(newCredential);

  const { credentials } = await getConfig();

  if (credentials && Object.keys(credentials).length === 1 && newCredential) {
    makeActive(Object.keys(newCredential)[0]);
  }

  spinner.succeed(`Config file edited at ${credentialsPath}`);
  return;
};
