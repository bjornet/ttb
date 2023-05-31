import { fetchIssueById } from "./issues.js";
import { MakeBranchName } from "./types/types.js";
import { kebabCase } from "./utils/kebabCase.js";

const DEFAULT_TYPE = "feature";

const getType = (labelNodes: string[]) => {
  /**
   * @todo locic to get type by label
   * eg. if label "bug" is found then type is "bug" since "bug" is valid as type and has the highest presedence
   */
  const types = labelNodes.filter((label: any) => {
    console.log(label);

    return label.includes("type/");
  });

  if (types.length > 0) {
    return types[0].split("/")[1];
  }

  return DEFAULT_TYPE;
};

const makeBranchName: MakeBranchName = ({ title, number, labels }) => {
  const type = getType(labels.nodes);

  const branchName = `${type}/${number}-${kebabCase(title)}`;

  return branchName;
};

export const getBranchName = async (issueNumber: number) => {
  const issue = await fetchIssueById(issueNumber);

  if (!issue) {
    return null;
  }

  const issueId = issue.id;

  const branchName = makeBranchName(issue);

  if (!branchName) {
    return null;
  }

  return { branchName, issueId };
};
