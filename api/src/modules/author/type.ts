import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from "graphql";
import TypeFilm from "../films/type";

const TypeAuthor: GraphQLObjectType = new GraphQLObjectType({
  name: "author",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    film: { type: new GraphQLList(TypeFilm) },
  }),
});

export default TypeAuthor;
