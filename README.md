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

## Tests
- as of now REPL snippets are implemented `*.repl.spec.js`
  - run them with your favorite REPL, mine is the VS Code extension [JavaScript REPL](https://marketplace.visualstudio.com/items?itemName=achil.vscode-javascript-repl)

## More information
Visit [JIRA Developer Docs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-rest-api-3-issue-issueidorkey-get)

## Todo
- [ ] Rewrite in functional style
  - point free
  - curry
  - compose
- [ ] Add tests
  - Install Jest (https://jestjs.io/)
- [ ] be able to handle a `;)` smiley at the end of a title
  - [ ] related: handle space at end (need to trim)
