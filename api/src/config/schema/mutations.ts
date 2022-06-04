import { GraphQLObjectType } from "graphql";
import * as  user from "../../modules/users/mutation";
import * as film from "../../modules/films/mutation";
import * as author from "../../modules/author/mutation";
import * as category from "../../modules/category/mutation";

const mutation = new GraphQLObjectType({
  name: "mutations",
  fields: {
    ...user,
    ...film,
    ...author,
    ...category,
  },
});



export default mutation