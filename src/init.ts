import os from "os";
import { writeFile } from "./utils/writeFile.js";
import { makeDir } from "./utils/makeDir.js";
import { checkIfFileExists } from "./utils/checkIfFileExists.js";
import { getConfig } from "./utils/getConfig.js";

export const init = async () => {
  const { configFullPath, configDirPath } = await getConfig();
  const configExists = await checkIfFileExists(configFullPath);

  if (configExists) {
    console.log("Config file exists");
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

  await makeDir(configDirPath);
  await writeFile(configFullPath, exampleCredentialsString);
};
