import { GraphQLInt, GraphQLList } from 'graphql';
import { Get, GetAll } from './reslover';
import TypeFilm from "./type";



export const filmGet={
    type:TypeFilm,
    args:{
        id:{type:GraphQLInt}
    },
    resolve:Get
}

export const filmGetAll={
    type:new GraphQLList(TypeFilm),
    resolve:GetAll
}
