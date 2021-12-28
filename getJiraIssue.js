import { get } from 'https';
import { getCredentials } from './credentials.js';

let httpOpts = {
  host: 'recose.atlassian.net',
  port: 443,
  path: null,
  method: 'GET',
  headers: {
    Accept: 'application/json',
  }
};

export const setupJiraConnector = async (issueCode) => {
  const { email, apiToken } = await getCredentials();

  httpOpts.headers = {
    ...httpOpts.headers,
    Authorization: `Basic ${Buffer.from(
      `${email}:${apiToken}`
    ).toString('base64')}`,
  }

  httpOpts.path = `/rest/api/2/issue/${issueCode}`;
}

export const getJiraIssue = async () => {
  return new Promise((resolve, reject) => {
    const req = get(httpOpts, (res) => {
      console.log(httpOpts);
      let chunks = [];

      res.on("data", (buffer) => {
        chunks.push(buffer);
      });

      res.on("end", () => {
        let data = Buffer.concat(chunks);
        let jiraIssueSchema = JSON.parse(data);

        if (!jiraIssueSchema) {
          reject(new Error("Could not find issue"));
        }

        if (!jiraIssueSchema?.fields?.summary) {
          reject(new Error("Could not find issue summary/title"));
        }

        resolve(jiraIssueSchema.fields);
      });

      res.on("error", (error) => {
        reject(error);
      });
    });

    req.end();
  });
};
