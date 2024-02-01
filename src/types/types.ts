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

export type ProjectManagementSystems = [ProjectManagementSystem];

/**
 * @todo: Add more project management systems
 * eg. [Github, Jira, GitLab, Trello, Asana]
 */
export type ProjectManagementSystem = 'GitHub';

export type Issue = {
  title: string;
  number: number;
};

export type MakeBranchName = (issue: Issue, type: string) => string;
