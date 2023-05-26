import ora from "ora";
import { getConfig } from "../utils/getConfig.js";
import { select } from "../utils/questions/select.js";
import { removeCredential } from "../utils/removeCredential.js";

export const remove = async () => {
  const { activeCredential, credentials } = await getConfig();
  const spinner = ora();

  if (!credentials) {
    spinner.fail(
      "No credentials found. You have to add a credential before you can remove one."
    );
    return;
  }

  const _credentials = Object.keys(credentials);

  const selectedCredential = await select(
    "Select a credential to remove",
    _credentials
  );

  if (selectedCredential === activeCredential) {
    spinner.fail(
      "You cannot remove your active credential. Please use 'ttb use' to change your active credential."
    );
    return;
  }

  removeCredential(selectedCredential.toString());
  spinner.succeed(`Removed ${selectedCredential} from credentials.`);
};
