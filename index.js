import * as fs from 'fs/promises';

// const credentials = require('./credentials.json');
console.log('beginning of project');

fs.readFile('./credentials').then((res) => {
    console.log(res);
}).catch(e => console.log(e));




// if [[ ! -f $(dirname $0)/credentials.txt ]]; then
//   echo "Could not find credentials.txt"
//   echo "Please read instructions header in this file"
//   exit 1
// fi

// source $(dirname $0)/credentials.txt

// function print_help {
//   printf "\nUsage: \n
//     \`jira_branch_creator.sh <code_type> <issue_code>\` \n
//     <code_type>: eg. feature | fix | hotfix \n
//     <issue_code>: [CLIENT-NNN] eg. SCO-192 \n\n"
// }

// if [ "${1}" == "--help" ]; then
//   print_help
//   exit;
// fi

// if [ -z "${1}" ]; then
//     echo "Missing argument: <code_type>"
//     print_help
//     exit
// fi

// if [ -z "${2}" ]; then
//     echo "Missing argument: <issue_code>"
//     print_help
//     exit
// fi

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
