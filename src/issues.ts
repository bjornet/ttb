import { request } from "./client.js";
import { IssueById } from "./graphql/IssueById.js";
import { LastIssues } from "./graphql/LastIssues.js";

export const getLastIssues = async () => {
  const response = await request(LastIssues);

  if (!response) {
    return [];
  }

  return response.repository.issues.edges;
};

export const fetchIssueById = async (id: number) => {
  const response = await request(IssueById, { id });

  if (!response) {
    return [];
  }

  return response.repository.issue;
};
