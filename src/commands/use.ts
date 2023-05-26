import ora from "ora";
import { getConfig } from "../utils/getConfig.js";
import { select } from "../utils/questions/select.js";
import { makeActive } from "../utils/makeActive.js";

export const use = async () => {
  const { credentials, activeCredential } = await getConfig();
  const spinner = ora();

  if (!credentials) {
    spinner.fail(
      "No config file found. Run 'ttb init' to create a config file."
    );
    return;
  }

  const _credentials = Object.keys(credentials);

  if (_credentials.length === 0) {
    spinner.fail(
      "You have no credentials to use, add a credential by running 'ttb add'."
    );
    return;
  }

  const selectedCredential = await select(
    "Select the credential you want to use.",
    _credentials,
    activeCredential
  );

  makeActive(selectedCredential.toString());

  spinner.succeed(`Using ${selectedCredential} as active credential.`);
};
