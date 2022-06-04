import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { create, get, gets, remove, update } from "./resolver";
import TypeAuthor from "./type";

const authorGet = {
  type: TypeAuthor,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: get,
};

const authorGets = {
  type: new GraphQLList(TypeAuthor),
  resolve: gets,
};



export { authorGet, authorGets };
