import { kebabCase, shellExec } from "./utils/index.js";
import { gitJiraTypeMap } from './gitJiraTypeMap.js';

export const generateGitBranchName = ({ summary, type, code }) => {
  const typeAsKebabCase = kebabCase(type);
  const codeSummaryAsKebabCase = kebabCase(`${code}-${summary}`);

  return `${typeAsKebabCase}/${codeSummaryAsKebabCase}`;
};

export const checkoutGitBranch = (branchName) => {
  shellExec(`git checkout -b ${branchName}`, (err, stdout) => {
    if (err) {
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

export const mapType = (jiraType) => gitJiraTypeMap.reduce((_, curr) => jiraType && jiraType === curr.jira ? curr.git : _, null);
