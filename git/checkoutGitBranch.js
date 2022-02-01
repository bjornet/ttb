import { shellExec, print } from "../utils/index.js";

/**
 * checkoutGitBranch :: String -> void
 * @notis I/O
 */
export const checkoutGitBranch = (branchName) => {
  shellExec(`git checkout -b ${branchName}`, (err, message) => {
    if (err) {
      console.log(err);
      return;
    }

    print(() => `message: ${message}`);
  });
};
