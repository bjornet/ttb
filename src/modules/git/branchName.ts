import { fetchIssueById } from '../api/github/issues.js';
import { MakeBranchName } from '../../types/types.js';
import { kebabCase } from '../../utils/kebabCase.js';

const makeBranchName: MakeBranchName = ({ title, number }, type: string) => {
  const branchName = `${type}/${number}-${kebabCase(title)}`;

  return branchName;
};

export const getBranchName = async (issueNumber: number, type: string) => {
  const issue = await fetchIssueById(issueNumber);

  if (!issue) {
    return null;
  }

  const issueId = issue.id;

  const branchName = makeBranchName(issue, type);

  if (!branchName) {
    return null;
  }

  return { branchName, issueId };
};
