import {post} from "superagent";

const FETCH_REPO_QUERY = `
    query {
        viewer {
            repositories(first:100) {
               nodes {
                    id
                    url
                    nameWithOwner
                    description
               }
            }
        }
}`;

const TOKEN = "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";

export const fetchRepositories = () =>
    post("https://api.github.com/graphql")
        .set({
            Authorization: `Bearer ${TOKEN}`,
        })
        .send({
            query: FETCH_REPO_QUERY,
        });
