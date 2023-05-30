import { GitHubCredential } from "../types/types.js";
import { input } from "./questions/input.js";

export const createGitHubCredential = async (): Promise<GitHubCredential> => {
  const userProjectName = await input("What is your project name?");
  const owner = await input("What is the name of the owner of the repository?");
  const repo = await input("What is the name of the repository?");
  const apiToken = await input("What is your personal access token?");

  return {
    [userProjectName]: {
      owner,
      repo,
      apiToken,
    },
  };
};
