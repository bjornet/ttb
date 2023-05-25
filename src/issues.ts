import { request } from "./client.js";
import { IssueById } from './graphql/IssueById.js';
import { LastIssues } from "./graphql/LastIssues.js";

export const getLastIssues = async () => {
  const response = await request(LastIssues);

  return response.repository.issues.edges;
};

export const fetchIssueById = async (id: number) => {
  const response = await request(IssueById, { id });

  return response.repository.issue;
};
