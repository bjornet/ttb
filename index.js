#!/usr/bin/env node
import { setupJiraConnector, getJiraIssue } from './getJiraIssue.js';
import { print } from './utils/index.js';
import { checkoutGitBranch, generateGitBranchName, mapType} from './gitManager.js';
import { getHelpMessage, getUsageMessage, getMissingArugmentsMessage } from './messages.js';
import { getArguments } from './arguments.js';

const default_type = 'feature';

const {
  type,
  code,
  yelp
} = getArguments();

const haltOnInitMessages = () => {
  if (yelp) {
    print(getUsageMessage);
    return true;
  }

  if (!code || code === true) {
    print(getMissingArugmentsMessage.bind(null, {type, code}));
    print(getUsageMessage);

    return true;
  }

  return false;
};

const App = async () => {
  print(getHelpMessage);

  if (haltOnInitMessages()) {
    return;
  }

  await setupJiraConnector(code);

  const {
    summary,
    issuetype: {
      name: jiraType,
    }
  } = await getJiraIssue();

  checkoutGitBranch(
    generateGitBranchName({
      summary,
      type: type || mapType(jiraType) || default_type,
      code,
    })
  );
};

App();
