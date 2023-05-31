import ora from "ora";
import { getConfig } from "../config/getConfig.js";
import { select } from "../questions/select.js";
import { removeCredential } from "../config/removeCredential.js";

export const remove = async () => {
  const { activeCredentialName, credentials } = await getConfig();
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

  if (selectedCredential === activeCredentialName) {
    spinner.fail(
      "You cannot remove your active credential. Please use 'ttb use' to change your active credential."
    );
    return;
  }

  const credentialRemoved = await removeCredential(
    selectedCredential.toString()
  );

  if (!credentialRemoved) {
    spinner.fail("Credential could not be removed.");
    return;
  }

  spinner.succeed(`Removed ${selectedCredential} from credentials.`);
};
