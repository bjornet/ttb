import { writeFile } from "../utils/writeFile.js";
import { makeDir } from "../utils/makeDir.js";
import { getConfig } from "../utils/getConfig.js";
import ora from "ora";

export const init = async () => {
  const spinner = ora("Initializing Ticket to Branch").start();

  const { configFullPath, configDirPath, configExists } = getConfig();

  if (configExists) {
    spinner.succeed("Config file already exists.");
    spinner.info('If you would like to edit your config file, run "ttb add"');
    return;
  }

  const credentialsString = JSON.stringify({});
  spinner.start("Creating config file");

  makeDir(configDirPath);

  writeFile(configFullPath, credentialsString);

  spinner.succeed(
    `Config file created at ${configFullPath}, now go add your credentials!`
  );
  spinner.info(
    `Run "ttb add" to add your credentials or edit your config file manually at ${configFullPath}'`
  );
};
