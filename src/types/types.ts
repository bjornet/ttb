export type GitHubCredential = {
  [key: string]: {
    host: string;
    email: string;
    apiToken: string;
  };
};

export type Credential = GitHubCredential | undefined;

export type Config = {
  activeCredential: string;
};
