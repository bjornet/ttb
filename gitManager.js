import { kebabCase, shellExec } from "./utils/index.js";
import { gitJiraTypeMap } from './jira/index.js';
import { print } from './utils/index.js'

export const generateGitBranchName = ({ summary, type, code }) => {
  const typeAsKebabCase = kebabCase(type);
  const codeSummaryAsKebabCase = kebabCase(`${code}-${summary}`);

  return `${typeAsKebabCase}/${codeSummaryAsKebabCase}`;
};

export const checkoutGitBranch = (branchName) => {
  shellExec(`git checkout -b ${branchName}`, (err, message) => {
    if (err) {
      console.log(err);
      return;
    }

    print(() => `message: ${message}`);
  });
};

export const mapType = (jiraType) =>
  gitJiraTypeMap.reduce(
    (acc, curr) =>
      (jiraType && jiraType === curr.jira) ? curr.git : acc,
    null
  );
