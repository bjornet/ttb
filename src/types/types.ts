export type GitHubCredential = {
  [key: string]: {
    owner: string;
    repo: string;
    apiToken: string;
  };
};

export type JiraCredential = {
  [key: string]: {
    host: string;
    email: string;
    apiToken: string;
  };
};

export type Credential = GitHubCredential | JiraCredential | undefined;

export type Config = {
  activeCredential: string;
};

export type ProjectManagementSystems = ["GitHub", "Jira", "Trello"];

export type ProjectManagementSystem = "GitHub" | "Jira" | "Trello";

export type Issue = {
  title: string;
  number: number;
  labels: {
    nodes: string[];
  };
};

export type MakeBranchName = (issue: Issue) => string;
