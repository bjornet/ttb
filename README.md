# jirabranchcreator

## Requirements
- Node v13.x or higher
- A [JIRA API token](https://id.atlassian.com/manage-profile/security/api-tokens)

## Usage

Add the following alias to your `.bashrc`

```sh
alias jirabranchcreator='node /path/to/jirabranchcreator/index.js'
```

Type `jirabranchcreator` in your terminal to start the program and help will be displayed.

## More information
Visit [JIRA Developer Docs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get
)

## Todo
- [ ] Move TODO to my personal Notion
- [ ] As a developer, I want to be able to paste the JIRA issue key in a lazy manner so that I don't have to match on the key exact.
  - [ ] it should use a fuzzy search for the issue key
  - [ ] it should be able to accept a URL where the issue key is in the URL
- [ ] Rewrite in functional style
  - point free
  - curry
  - compose
- [ ] Add tests
  - Install Jest
