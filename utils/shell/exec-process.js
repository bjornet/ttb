import { exec } from "child_process";

export const shellExec = (command, callback) => {
  exec(command, (err, stdout, stderr) => {
    if (err != null) {
      return callback(new Error(err), null);
    } else if (typeof stderr != "string") {
      return callback(new Error(stderr), null);
    }

    return callback(null, stdout || stderr);
  });
};
