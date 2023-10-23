import { Ora } from "ora";
import { Credential, ProjectManagementSystem } from "../../types/types.js";
import { createCredential } from "./createCredential.js";

export const getNewCredential = async (
  projectManagementSystem: ProjectManagementSystem,
  spinner: Ora
): Promise<Credential | false> => {
  if (projectManagementSystem === "GitHub") {
    return await createCredential();
  }

  if (projectManagementSystem === "Jira") {
    spinner.fail("Jira is not yet supported");
    return false;
  }

  if (projectManagementSystem === "Trello") {
    spinner.fail("Trello is not yet supported");
    return false;
  }

  return false;
};
