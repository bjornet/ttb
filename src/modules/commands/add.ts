import { getConfig } from "../config/getConfig.js";
import ora from "ora";
import { select } from "../questions/select.js";
import { addCredential } from "../config/addCredential.js";
import { makeActive } from "../config/makeActive.js";
import { ProjectManagementSystems } from "../../types/types.js";
import { getNewCredential } from "../config/getNewCredential.js";

export const add = async () => {
  const spinner = ora("Add credential process started.").start();

  const { credentialsPath, credentialsExists } = await getConfig();

  const projectManagementSystems: ProjectManagementSystems = ['GitHub'];

  if (!credentialsExists) {
    spinner.fail('You must run "ttb init" before you can add a credential.');
    return;
  }

  spinner.stop();

  const selectedProjectManagementSystem = await select(
    "What project management system are you using?",
    projectManagementSystems
  );

  const newCredential = await getNewCredential(
    selectedProjectManagementSystem,
    spinner
  );

  if (!newCredential) {
    return;
  }

  spinner.start("Editing config file");

  const credentialAdded = await addCredential(newCredential);

  if (!credentialAdded) {
    spinner.fail("Credential could not be added.");
    return;
  }

  spinner.succeed("Credential added.");

  const { credentials } = await getConfig();

  if (credentials && Object.keys(credentials).length === 1 && newCredential) {
    const credentialActivated = await makeActive(Object.keys(newCredential)[0]);

    if (!credentialActivated) {
      spinner.fail("Credential could not be activated.");
      return;
    }
  }

  spinner.succeed(`Config file edited at ${credentialsPath}`);
  return;
};
