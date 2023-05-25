import os from "os";
import { writeFile } from "../utils/writeFile.js";
import { makeDir } from "../utils/makeDir.js";
import { checkIfFileExists } from "../utils/checkIfFileExists.js";
import { getConfig } from "../utils/getConfig.js";
import ora from "ora";

export const init = async () => {
  const spinner = ora("Initializing Ticket to Branch").start();

  const { configFullPath, configDirPath } = await getConfig();
  const configExists = await checkIfFileExists(configFullPath);

  if (configExists) {
    spinner.succeed("You are already set up!");
    return;
  }

  const exampleCredentials = {
    projectName: {
      host: "<your_host>.atlassian.net",
      email: "<user_email>",
      apiToken: "<user_account_api_token>",
    },
  };

  const exampleCredentialsString = JSON.stringify(exampleCredentials);

  spinner.start("Creating config file");

  await makeDir(configDirPath);

  await writeFile(configFullPath, exampleCredentialsString);

  spinner.succeed("Config file created, now go add your credentials!");
};
