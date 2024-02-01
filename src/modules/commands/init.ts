import { createConfig } from '../config/createConfig.js';
import { getConfig } from '../config/getConfig.js';
import ora from 'ora';

export const init = async () => {
  const spinner = ora('Initializing Ticket to Branch').start();

  const {
    credentialsPath,

    configExists,
    credentialsExists,
  } = await getConfig();

  if (credentialsExists && configExists) {
    spinner.succeed('Config already set up.');
    spinner.stopAndPersist({
      symbol: '🎫',
      text: 'If you would like to edit your config file, run "ttb add"',
    });
    return;
  }

  const configCreated = await createConfig(spinner);

  if (!configCreated) {
    spinner.fail('Config could not be created.');
    return;
  }

  spinner.succeed(`Config set up at ${credentialsPath}, now go add your credentials!`);
  spinner.stopAndPersist({
    symbol: '🎫',
    text: `Run "ttb add" to add your credentials or edit your config file manually at ${credentialsPath}'`,
  });
};
