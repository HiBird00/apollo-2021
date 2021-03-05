import { ApolloServer, gql } from 'apollo-server';
import resolvers from "./graphql/resolvers";
import fs from "fs";

const typeDefs = gql`${fs.readFileSync(__dirname.concat('/graphql/schema.graphql'), 'utf8')}`;


const server = new ApolloServer({
    typeDefs,
    resolvers
 });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});