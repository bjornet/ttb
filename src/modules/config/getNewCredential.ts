import { Ora } from "ora";
import { Credential, ProjectManagementSystem } from "../../types/types.js";
import { createGitHubCredential } from "./createGitHubCredential.js";

export const getNewCredential = async (
  projectManagementSystem: ProjectManagementSystem,
  spinner: Ora
): Promise<Credential | false> => {
  if (projectManagementSystem === "GitHub") {
    return await createGitHubCredential();
  }

  if (projectManagementSystem === "Jira") {
    spinner.fail("Jira is not yet supported");
    return false;
  }

  if (projectManagementSystem === "Trello") {
    spinner.fail("Trello is not yet supported");
    return false;
  }
};
