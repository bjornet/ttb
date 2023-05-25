import { fetchIssueById } from "./issues.js";
import { kebabCase } from "./utils/kebabCase.js";

const DEFAULT_TYPE = "feature";

let type = DEFAULT_TYPE;

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

type Issue = {
  title: string;
  number: number;
  labels: {
    nodes: string[];
  };
};

type MakeBranchName = (issue: Issue ) => Promise<string>;

const makeBranchName: MakeBranchName = async ({ title, number, labels }) => {
  const type = getType(labels.nodes);

  return `${type}/${number}-${kebabCase(title)}`;
};

export const getBranchName = async (id: number) => {
  const issue = await fetchIssueById(id);

  return makeBranchName(issue);
};
