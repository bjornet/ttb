import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
import { getConfig } from "../config/getConfig.js";

type Request = (
  query: string,
  variables?: {
    [key: string]: string | number | boolean;
  }
) => Promise<GraphQlQueryResponseData | null>;

export const request: Request = async (query: string, variables) => {
  const { activeCredential } = await getConfig();

  if (!activeCredential) {
    console.log("No active credential found");
    return null;
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
    return null;
  }
};
