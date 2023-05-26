import { GitHubCredential } from "../types/types.js";
import { input } from "./questions/input.js";

export const createGitHubCredential = async (): Promise<GitHubCredential> => {
  const userProjectName = await input("What is your project name?");
  const userHost = await input("What is your host?");
  const userEmail = await input("What is your email?");
  const userApiToken = await input("What is your API token?");

  return {
    [userProjectName]: {
      host: userHost,
      email: userEmail,
      apiToken: userApiToken,
    },
  };
};
