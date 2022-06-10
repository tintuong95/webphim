import { GraphQLInt ,GraphQLList} from "graphql";
import { index, show } from "./reslovers";
import TypeUser from "./type";

export const getById = {
  type: TypeUser,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: show,
};


export const getUsers={
  type:new GraphQLList(TypeUser),
  resolve:index
}