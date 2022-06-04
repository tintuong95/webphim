import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

const TypeUser:GraphQLObjectType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    avatar: { type: GraphQLString },
  }),
});

export default TypeUser
