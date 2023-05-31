export const CreateLinkedBranch = `
mutation CreateLinkedBranch($issueId: ID!, $sha: GitObjectID!, $name: String!) {
  createLinkedBranch(input: { issueId: $issueId, oid: $sha, name: $name} ) {
    linkedBranch {
      ref {
        name
      }
    }
  }
}
`;
