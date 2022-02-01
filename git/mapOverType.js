import { gitJiraTypeMap } from "../jira/index.js";

export const mapOverType = (jiraType) =>
  gitJiraTypeMap.reduce(
    (acc, curr) => (jiraType && jiraType === curr.jira ? curr.git : acc),
    null
  );
