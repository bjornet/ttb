import { ExecException, exec } from 'child_process';

type ShellExec = (command: string) => Promise<{ error: ExecException | null; output: string }>;

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
