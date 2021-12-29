#!/usr/bin/env node
// import { config as dotenvConfig } from 'dotenv';

import { setupJiraConnector, getJiraIssue } from './getJiraIssue.js';
import { kebabCase, print, shellExec } from './utils/index.js';
import { getHelpMessage, getUsageMessage, getMissingArugmentsMessage } from './messages.js';
import { getArguments } from './arguments.js';

// dotenvConfig({
//   debug: true,
//   path: new URL('.env', import.meta.url),
// });

// const envtest = process.env.FOO;
// console.log(envtest);

print(getHelpMessage);

const {
  type,
  code,
  yelp
} = getArguments();

if (yelp) {
  print(getUsageMessage);
}

if (!type || !code) {
  print(getMissingArugmentsMessage.bind(null, {type, code}));
  print(getUsageMessage);

  // TODO: exit
}

const generateBranchName = ({ summary }) => {
  return kebabCase(`${type}/${code}-${summary}`);
};

const App = async () => {
  await setupJiraConnector(code);

  const branchName = generateBranchName(await getJiraIssue());

  console.log(branchName);
};

App();

// git checkout -b $branch_name
shellExec('sh temp.sh', (err, response) => {
  if(!err){
    console.log(response);
  }else {
    console.log('error!');
    console.log(err);
  }
});
