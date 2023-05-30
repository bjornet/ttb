import { request } from "./client.js";
import { IssueById } from "./graphql/IssueById.js";

export const fetchIssueById = async (id: number) => {
  const response = await request(IssueById, { id });

  if (!response) {
    return null;
  }

  return response.repository.issue;
};
