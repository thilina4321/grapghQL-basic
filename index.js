import { GraphQLServer, PubSub } from "graphql-yoga";
import db from './src/db'
import Query from './resolvers/Query'
import Comment from './resolvers/Comment'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'


const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs:'./src/schema.graphql',
  resolvers:{
      Query,
      Mutation,
      Subscription,
      Comment,
      User
  },
  context:{db, pubsub},
  
});

server.start(() => {
  console.log("Hello server");
});
