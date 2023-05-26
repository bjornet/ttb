import { writeFile } from "../utils/writeFile.js";
import { makeDir } from "../utils/makeDir.js";
import { getConfig } from "../utils/getConfig.js";
import ora from "ora";
import { select } from "../utils/questions/select.js";
import { createGitHubCredential } from "../utils/createGitHubCredential.js";
import { addCredential } from "../utils/addCredential.js";

export const add = async () => {
  const spinner = ora("Add credential process started.").start();

  const { configFullPath, configDirPath, configExists } = getConfig();

  let projectManagementSystem;
  let newCredential;

  if (!configExists) {
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

  const exampleCredentials = {
    projectName: {
      host: "<your_host>",
      email: "<user_email>",
      apiToken: "<user_account_api_token>",
    },
  };

  const credentialsString = JSON.stringify(newCredential || exampleCredentials);

  spinner.start("Editing config file");

  addCredential(newCredential);

  spinner.succeed(`Config file edited at ${configFullPath}`);
  return;
};
