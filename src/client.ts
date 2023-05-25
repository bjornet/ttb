import { graphql, GraphQlQueryResponseData } from "@octokit/graphql";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  owner: process.env.GITHUB_OWNER,
  repo: process.env.GITHUB_REPO,
  token: process.env.GITHUB_TOKEN,
};

type Request = (
  query: string,
  variables?: {
    [key: string]: string | number | boolean;
  }
) => Promise<GraphQlQueryResponseData>;

export const request: Request = async (query: string, variables) => {
  try {
    const response: GraphQlQueryResponseData = await graphql({
      query,
      owner: config.owner,
      repo: config.repo,
      headers: {
        authorization: `bearer ${config.token}`,
      },
      ...variables,
    });

    return response;
  } catch (error) {
    console.log(error);
  }

  return new Promise((resolve) => resolve([]));
};
