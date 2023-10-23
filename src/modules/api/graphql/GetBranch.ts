export const GetBranch = `
query GetBranch($owner: String!, $name: String!, $branch: String!) {
    repository(name: $name, owner: $owner) {
      ref(qualifiedName: $branch) {
        name
      }
    }
  }`;
