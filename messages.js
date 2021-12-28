const helpMessage = 'For application help, type Yelp for Help: `node index.js --yelp`, woff woff!';
export const getHelpMessage = () => helpMessage;

const usageMessage = `
  Usage:
    \`node index.js --type=<code_type> --code=<issue_code>\`
    <code_type>: feature | fix | hotfix
    <issue_code>: [CLIENT-NNN] eg. OS-339

    Example: \`node index.js --type=feature --code=OS-339\`
  `;
export const getUsageMessage = () => usageMessage;

const missingArugmentsMessage = `
  You provided the following:
    type: <issue_type>
    code: <issue_code>
`;
export const getMissingArugmentsMessage = ({ type, code }) => missingArugmentsMessage.replace(/<issue_type>/, type).replace(/<issue_code>/, code);
