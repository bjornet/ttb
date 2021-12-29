import { exec } from "child_process";

export const shellExec = (command, cb) => {
  const child = exec(command, (err, stdout, stderr) => {
    if (err != null) {
      return cb(new Error(err), null);
    } else if (typeof stderr != "string") {
      return cb(new Error(stderr), null);
    } else {
      return cb(null, stdout);
    }
  });
};
