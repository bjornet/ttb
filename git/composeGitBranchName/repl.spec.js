import { composeGitBranchName } from "./composeGitBranchName";

/**
 * @repl `type` with whitespace are keabab cased
 * @assert 'bug-of-some-type/DV-249-summary'
 */
composeGitBranchName({
  summary: "Summary",
  type: "bug of some type",
  code: "DV-249",
}); //=

/**
 * @repl summary is kebab cased
 * @assert 'bug/DV-249-this-is-a-summary'
 */
composeGitBranchName({
  summary: "This is A SUMMAry",
  type: "bug",
  code: "DV-249",
}); //=

/**
 * @repl summary can be empty
 * @assert 'bug/DV-249'
 */
composeGitBranchName({
  summary: "",
  type: "bug",
  code: "DV-249",
}); //=

/**
 * @repl code is uppercased
 * @assert 'bug/DV-249-summary'
 */
composeGitBranchName({
  summary: "Summary",
  type: "bug",
  code: "dv-249",
}); //=

/**
 * @repl summary will handle multiple whitespace timming
 * @assert 'bug/DV-249-summary-with-possible-unintended-whitespace'
 */
 composeGitBranchName({
  summary: "  Summary with possible    unintended whitespace   ",
  type: "bug",
  code: "DV-249",
}); //=

/**
 * @repl summary will be stripped of wierd characters
 * @assert 'bug/DV-249-summary-with-weird-characters-should-still-make-sense'
 */
composeGitBranchName({
  summary: "!¡Summary with weird characters !@#$%^&*()_+-=[]{}|;':,./<>? should still make sense!-",
  type: "bug",
  code: "DV-249",
}); //=
