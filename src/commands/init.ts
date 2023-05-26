import { writeFile } from "../utils/writeFile.js";
import { makeDir } from "../utils/makeDir.js";
import { getConfig } from "../utils/getConfig.js";
import ora from "ora";

export const init = async () => {
  const spinner = ora("Initializing Ticket to Branch").start();
  const emptyObject = JSON.stringify({});

  const { credentialsPath, configDirPath, configPath, credentialsExists } =
    await getConfig();

  if (credentialsExists) {
    spinner.succeed("Config file already exists.");
    spinner.info('If you would like to edit your config file, run "ttb add"');
    return;
  }

  spinner.start("Creating config file");

  makeDir(configDirPath);

  writeFile(credentialsPath, emptyObject);
  writeFile(configPath, emptyObject);

  spinner.succeed(
    `Config file created at ${credentialsPath}, now go add your credentials!`
  );
  spinner.info(
    `Run "ttb add" to add your credentials or edit your config file manually at ${credentialsPath}'`
  );
};
