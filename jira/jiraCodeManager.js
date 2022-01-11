export const getExtractJiraCode = (input) => {
  const jiraCodePattern = /[A-Za-z]+-\d+/g;

  return input.match(jiraCodePattern)
    ? input.match(jiraCodePattern).find(() => true)
    : null;
};

export const isJiraCodeValid = (codeInput) => {
  return codeInput && getExtractJiraCode(codeInput) ? true : false;
};

