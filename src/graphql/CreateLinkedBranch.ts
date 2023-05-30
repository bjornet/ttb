export const CreateLinkedBranch = `
mutation CreateLinkedBranch($issueId: ID!, $sha: GitObjectID!) {
  createLinkedBranch(input: { issueId: $issueId, oid: $sha} ) {
    linkedBranch {
      ref {
        name
      }
    }
  }
}
`;
