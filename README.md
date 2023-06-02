# Ticket to Branch

## Requirements

- Node v13.x or higher
- An Personal API token
  - [JIRA](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)
  - [Github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Usage

Add the following alias to your `.bashrc`

```sh
alias ttb='npm --prefix /<path>/<to>/ticket-to-branch run start'
```

Type `ttb` in your terminal to start the program and help will be displayed.
Type `ttb init` to create a config file in your home directory.

## Development

1. `pnpm i`
2. `pnpm run build`
3. `pnpm run start`

## Notes

- note that options are not working properly when running `pnpm run start`

## Tests

- as of now REPL snippets are implemented `*.repl.spec.js`
  - run them with your favorite REPL, mine is the VS Code extension [JavaScript REPL](https://marketplace.visualstudio.com/items?itemName=achil.vscode-javascript-repl)

## Todo

- [ ] Move all todos to Github issues for this repo
- [ ] Rename repo from jirabranchcreator to ticket-to-branch
- [ ] Add support for Github ticketing system
- [ ] Write tests
  - Install Jest (https://jestjs.io/)
- [ ] Install and setup ESLint (https://eslint.org/)
