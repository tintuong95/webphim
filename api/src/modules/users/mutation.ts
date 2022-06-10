import { GraphQLString,GraphQLObjectType } from "graphql";
import { create, login, logoutUser } from "./reslovers";
import TypeUser from "./type";

 export const signup = {
  type: GraphQLString,
  args: {
    username: {
      name: "username",
      type: GraphQLString,
    },
    password: {
      name: "password",
      type: GraphQLString,
    }
  },
  resolve: create,
};


export const signin={
    type:GraphQLString,
    args:{
        username:{
            name:"username",
            type:GraphQLString
        },
        password:{
            name:"password",
            type:GraphQLString,
        }
    },
    resolve:login
}


export const logout={
  type:GraphQLString,
  resolve:logoutUser
}