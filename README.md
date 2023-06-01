# ttb

A CLI tool to create a new branch from a ticket number in your project management tool.

## Requirements

- Node v13.x or higher
- An Personal API token
  - [JIRA](https://confluence.atlassian.com/enterprise/using-personal-access-tokens-1026032365.html)
  - [Github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Usage

### Installation

```sh
npm i -g ttb
```

### Setup

```sh
ttb init
ttb add
```

### Branching

Go to your project directory and run

```sh
ttb branch <ticket-number>
```

### Commands

- `init` - create a config file in your user directory.
- `add` - add a new credential. (Will be set to active if no other credentials exist)
- `remove` - remove a credential.
- `use` - set a credential to active. (This will be the credential used for the `branch` command)
- `branch <ticket-number>` - create a new branch.

## Current Support

- Github

## Future

Jira support is soon in progress. The goal is to be able to create a branch from a ticket number. The branch name will be the ticket number and the title of the ticket. The ticket number will be prepended with the ticket type. For example, `feature/TTB-1234-This is the title of the ticket`.

## Development

1. `pnpm i`
2. `pnpm run build`
3. `pnpm run start <command>`

### Notes

- note that options are not working properly when running `pnpm run start`

## Sponsors

<a href="https://www.osynlig.se/">
  <img src="https://avatars.githubusercontent.com/u/9366696?s=200&v=4" alt="Osynlig AB" width="200" />
</a>
