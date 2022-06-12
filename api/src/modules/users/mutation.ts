import { GraphQLString,GraphQLInt } from "graphql";
import { create, login, loginAd, logoutUser, remove } from "./reslovers";
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


export const removeUser={
  type:GraphQLString,
  args:{
    id:{
      name:"id",
      type:GraphQLInt
    }
  } ,
  resolve:remove
}

export const loginAdmin={
  type:GraphQLString,
  args:{
    username:{name:"username",type:GraphQLString},
    password:{name:"password",type:GraphQLString}
  },
  resolve:loginAd
}