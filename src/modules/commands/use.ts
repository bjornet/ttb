import ora from 'ora';
import { getConfig } from '../config/getConfig.js';
import { select } from '../questions/select.js';
import { makeActive } from '../config/makeActive.js';

export const use = async () => {
  const { credentials, activeCredentialName } = await getConfig();
  const spinner = ora();

  if (!credentials) {
    spinner.fail("No config file found. Run 'ttb init' to create a config file.");
    return;
  }

  const _credentials = Object.keys(credentials);

  if (_credentials.length === 0) {
    spinner.fail("You have no credentials to use, add a credential by running 'ttb add'.");
    return;
  }

  const selectedCredential = await select(
    'Select the credential you want to use.',
    _credentials,
    activeCredentialName
  );

  const credentialActivated = await makeActive(selectedCredential.toString());

  if (!credentialActivated) {
    spinner.fail('Credential could not be activated.');
    return;
  }

  spinner.succeed(`Using "${selectedCredential}" as active credential.`);
};
