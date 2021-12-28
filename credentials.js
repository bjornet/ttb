import * as fs from "fs/promises";

const readCredentialsFile = async () => {
  return fs
    .readFile("./credentials.json", "utf8")
    .then((file) => JSON.parse(file))
    .then((credentials) => credentials)
    .catch(() =>
      console.log("Could not find credentials. Please refer to README.md")
    );
};

export const getCredentials = async () => {
  const { email, apiToken } = await readCredentialsFile();

  if (!email) {
    throw new Error("Could not find email");
  }

  if (!apiToken) {
    throw new Error("Could not find apiToken");
  }

  return { email, apiToken };
}
