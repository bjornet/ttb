import { request } from "../client.js";
import { CreateLinkedBranch } from "../graphql/CreateLinkedBranch.js";

export const createLinkedBranch = async (
  issueId: number,
  fromBranchSHA: string,
  name: string
) => {
  const trimmedFromBranchSHA = fromBranchSHA.trim();

  const response = await request(CreateLinkedBranch, {
    issueId,
    sha: trimmedFromBranchSHA,
    name,
  });

  if (!response) {
    return null;
  }

  return response.createLinkedBranch.linkedBranch.ref.name;
};
