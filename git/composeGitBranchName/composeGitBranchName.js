import { kebabCase, compose } from "../../utils/index.js";

// assembleBranchName :: a -> String
const assembleBranchName = ({ type, code, summary }) =>
  summary.length > 0 ? `${type}/${code}-${summary}` : `${type}/${code}`

// formatCode :: a -> a
const formatCode = (data) => ({
  ...data,
  code: data.code.toUpperCase(),
});

// formatType :: a -> a
const formatType = (data) => ({
  ...data,
  type: kebabCase(data.type),
});

// trimSummary :: a -> a
const trimSummary = (data) => ({ ...data, summary: data.summary.trim() });

// trimSummary :: a -> a
const kebabCaseSummary = (data) => ({
  ...data,
  summary: kebabCase(data.summary),
});

const formatSummary = compose(kebabCaseSummary, trimSummary);

export const composeGitBranchName = compose(
  assembleBranchName,
  formatCode,
  formatType,
  formatSummary
);
