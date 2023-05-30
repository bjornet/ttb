import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
import { getConfig } from "./utils/getConfig.js";

type Request = (
  query: string,
  variables?: {
    [key: string]: string | number | boolean;
  }
) => Promise<GraphQlQueryResponseData | false>;

export const request: Request = async (query: string, variables) => {
  const { activeCredential } = await getConfig();

  if (!activeCredential) {
    console.log("No active credential found");
    return Promise.resolve(false);
  }

  try {
    const response: GraphQlQueryResponseData = await graphql({
      query,
      owner: activeCredential.owner,
      repo: activeCredential.repo,
      headers: {
        authorization: `bearer ${activeCredential.apiToken}`,
      },
      ...variables,
    });

    return response;
  } catch (error) {
    console.log(error);
  }

  return new Promise((resolve) => resolve([]));
};
