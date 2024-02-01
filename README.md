# Ticket To Branch – ttb

A CLI tool to create a new branch from a ticket number in your project management tool.

## Requirements

- Node v13.x or higher
- An Personal API token
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

- support for more project management tools
  - high prio: Jira
  - high prio: Gitlab
  - low prio: Trello
  - low prio: Assana

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
