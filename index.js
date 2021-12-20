#!/usr/bin/env node
import * as fs from "fs/promises";
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv

console.log('For application help, type Yelp for Help: `node index.js --yelp`, woff woff!');

const usageMessage = `
  Usage:
    \`node index.js --type=<code_type> --code=<issue_code>\`
    <code_type>: feature | fix | hotfix
    <issue_code>: [CLIENT-NNN] eg. OS-339

    Example: \`node index.js --type=feature --code=OS-339\`
  `;

if (argv.yelp) {
  console.log(usageMessage);
}

const getCredentials = () => {
  fs.readFile('./credentials.json', 'utf8')
  .then(file => JSON.parse(file))
  .then(credentials => {
    console.log(credentials);

  })
  .catch(() =>
    console.log("Could not find credentials. Please refer to README.md")
  );
};

//getCredentials();


const missingArugmentsMessage =`
  You provided the following:
    type: ${argv.type}
    code: ${argv.code}
  `;

if (!argv.type || !argv.code) {
  console.log(missingArugmentsMessage, usageMessage);
}

// const jiraIssueCode =

// jira_issue_code=$(curl -u $email:$apiToken -X GET -H "Content-Type: application/json" https://lybesweden.atlassian.net/rest/api/latest/issue/{$2} | jq -r '.fields.summary')

// if [ "${jira_issue_code}" == "null" ]; then
//     echo "No matching issue in Jira"
//     print_help
//     exit
// fi

// # branch_name: <code_type>/<issue_code>-issue-title-all-lowercase eg. `feature/SWE-123-sso-sign-on`
// branch_name="${1}/$(echo ${2}-${jira_issue_code//-/} | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd '[:alnum:]-')"

// git checkout -b $branch_name

// if [ -f vendor/bin/cl ]; then
//   type=$(echo ${1} | sed 's/bugfix/fix/')
//   vendor/bin/cl add ${type} "${jira_issue_code}" "https://lybesweden.atlassian.net/browse/${2}"
// fi
