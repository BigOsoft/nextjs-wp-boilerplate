import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://cms.tejofficial.co/graphql',
  cache: new InMemoryCache()
});

export default client;