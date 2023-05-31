import { Ora } from "ora";
import { getConfig } from "./getConfig.js";
import { writeFile } from "../../utils/writeFile.js";
import { makeDir } from "../../utils/makeDir.js";

export const createConfig = async (spinner: Ora): Promise<boolean> => {
  const emptyObject = JSON.stringify({});

  const {
    credentialsPath,
    configDirPath,
    configPath,
    configExists,
    credentialsExists,
    configDirExists,
  } = await getConfig();

  if (!configDirExists) {
    spinner.start("Creating config directory");
    const configDirCreated = makeDir(configDirPath);

    if (!configDirCreated) {
      spinner.fail("Config directory could not be created.");
      return Promise.resolve(false);
    }
    spinner.succeed("Config directory created.");
  }

  if (!credentialsExists) {
    spinner.start("Creating credentials file");
    const credentialsFileWritten = writeFile(credentialsPath, emptyObject);

    if (!credentialsFileWritten) {
      spinner.fail("Credentials file could not be created.");
      return Promise.resolve(false);
    }
    spinner.succeed("Credentials file created.");
  }

  if (!configExists) {
    spinner.start("Creating config file");
    const configFileWritten = writeFile(configPath, emptyObject);

    if (!configFileWritten) {
      spinner.fail("Config file could not be created.");
      return Promise.resolve(false);
    }
    spinner.succeed("Config file created.");
  }
  return Promise.resolve(true);
};
