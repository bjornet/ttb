#!/usr/bin/env node
import {
  setupJiraConnector,
  fetchJiraIssue,
  isJiraCodeValid,
  getExtractJiraCode
} from './jira/index.js';
import { print, compose } from './utils/index.js';
import { checkoutGitBranch, composeGitBranchName, mapOverType} from './git/index.js';
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

  const run = compose(checkoutGitBranch, composeGitBranchName);

  run({
    summary,
    type: type || mapOverType(jiraType) || default_type,
    code: getExtractJiraCode(code),
  })
};

App();
