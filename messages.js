const helpMessage = 'For application help, type Yelp for Help: `jirabranchcreator --yelp`, woff woff!';
export const getHelpMessage = () => helpMessage;

const usageMessage = `
  Usage:
    \`jirabranchcreator --code=<issue_code> [--type=<git_code_type>]\`
    <git_code_type>: feature | fix | hotfix (optional) (fallback: feature)
    <issue_code>: [CLIENT-NNN] eg. OS-339

    Example: \`jirabranchcreator --code=OS-339\`
  `;
export const getUsageMessage = () => usageMessage;

const missingArugmentsMessage = `
  You provided the following:
    type: <issue_type> (optional: override)
    code: <issue_code>
`;
export const getMissingArugmentsMessage = ({ type, code }) => missingArugmentsMessage.replace(/<issue_type>/, type).replace(/<issue_code>/, code);
