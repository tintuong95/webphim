import { GraphQLObjectType } from "graphql";
import * as user from "../../modules/users/query";
import * as film from "../../modules/films/query";
import * as author from "../../modules/author/query";
import * as category from "../../modules/category/query";

const query = new GraphQLObjectType({
  name: "query",
  fields: {
    ...user,
    ...film,
    ...author,
    ...category,
  },
});

export default query;
