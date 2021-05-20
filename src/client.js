import {ApolloClient, InMemoryCache, HttpLink} from "@apollo/client";

const token = "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";

const authorization = `Bearer ${token}`;

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
        authorization,
    },
});

const client = new ApolloClient({
    link,
    cache,
});

export default client;
