import { GraphQLInt } from 'graphql';
import { show } from './reslovers';
import TypeUser from "./type";


export const getById ={
    type: TypeUser,
    args:{
        id:{type:GraphQLInt}
    },
    resolve:show
}