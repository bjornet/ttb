import { shellExec } from "../../utils/execProcess.js";

export const gitPull = async () => {
  try {
    return await shellExec("git pull");
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};
