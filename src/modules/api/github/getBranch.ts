import { request } from "../client.js";
import { GetBranch } from "../graphql/GetBranch.js";

export const getBranch = async (
  repoName: string,
  repoOwner: string,
  branchName: string
) => {
  const response = await request(GetBranch, {
    name: repoName,
    owner: repoOwner,
    branch: branchName,
  });

  if (!response || !response.repository || !response.repository.ref) {
    return null;
  }



  return response.repository.ref.name;
};
