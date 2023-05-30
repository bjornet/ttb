import { exec, execSync } from "child_process";

type ShellExec = (command: string) => Promise<{ error: any; output: any }>;

export const shellExec: ShellExec = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({ error, output: stderr });
      }
      resolve({ error, output: stdout });
    });
  });
};
