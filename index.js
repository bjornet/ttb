#!/usr/bin/env node
import { setupJiraConnector, fetchJiraIssue, isJiraCodeValid, getExtractJiraCode } from './jira/index.js';
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

  if (!isJiraCodeValid(code)) {
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

  await setupJiraConnector(
    getExtractJiraCode(code)
  );

  const {
    summary,
    issuetype: {
      name: jiraType,
    }
  } = await fetchJiraIssue();

  checkoutGitBranch(
    generateGitBranchName({
      summary,
      type: type || mapType(jiraType) || default_type,
      code: getExtractJiraCode(code),
    })
  );
};

App();
