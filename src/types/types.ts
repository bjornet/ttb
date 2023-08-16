export type CredentialProps = {
  owner: string;
  repo: string;
  apiToken: string;
};

export type Credential = {
  [key: string]: CredentialProps;
};

export type Config = {
  activeCredential: string;
};

export type ProjectManagementSystems = ["GitHub", "Jira", "Trello"];

export type ProjectManagementSystem = "GitHub" | "Jira" | "Trello";

export type Issue = {
  title: string;
  number: number;
};

export type MakeBranchName = (issue: Issue, type: string) => string;
