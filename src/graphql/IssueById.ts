export const IssueById = `
  query IssueById($owner: String!, $repo: String!, $id: Int!) {
    repository(owner:$owner, name:$repo) {
      issue(number:$id) {
        title
        number
        labels(first: 100) {
          nodes {
            name
          }
        }
      }
    }
  }
`;
