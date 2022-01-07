#!/usr/bin/env node
import { setupJiraConnector, getJiraIssue } from './getJiraIssue.js';
import { kebabCase, print, shellExec } from './utils/index.js';
import { getHelpMessage, getUsageMessage, getMissingArugmentsMessage } from './messages.js';
import { getArguments } from './arguments.js';

const {
  type,
  code,
  yelp
} = getArguments();

const generateBranchName = ({ summary }) => {
  return kebabCase(`${type}/${code}-${summary}`);
};

const haltOnInitMessages = () => {
  if (yelp) {
    print(getUsageMessage);
    return true;
  }

  if (!type || type === true || !code || code === true) {
    print(getMissingArugmentsMessage.bind(null, {type, code}));
    print(getUsageMessage);

    return true;
  }

  return false;
};

const checkoutBranch = (branchName) => {
  shellExec(`git checkout -b ${branchName}`, (err, stdout) => {
    if(err){
      console.log(err);
      return;
    }

    /**
     * TODO: use the print method
     */
    console.log(stdout);
    console.log(`Branch named '${branchName}' was created`);
  });
};

const App = async () => {
  print(getHelpMessage);

  if (haltOnInitMessages()) {
    return;
  }

  await setupJiraConnector(code);

  checkoutBranch(
    generateBranchName(
      await getJiraIssue()
    )
  );
};

App();
