import ora from "ora";
import { getConfig } from "../utils/getConfig.js";
import { select } from "../utils/questions/select.js";

export const use = async (args: string[]) => {
  const { config } = getConfig();
  const spinner = ora();
  if (!config) {
    spinner.fail(
      "No config file found. Run 'ttb init' to create a config file or 'ttb add' to add credentials."
    );
  }
  const credentials = Object.keys(config);

  const activeCredential = await select(
    "Select the credential you want to use.",
    credentials
  );

  /**
   * @todo save active credential so that it can be used in other commands
   */

  spinner.succeed(`Using ${activeCredential} as active credential.`);
};
