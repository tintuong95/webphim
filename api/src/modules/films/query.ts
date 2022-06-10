import { GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import { Get, GetAll, GetAllLimit } from './reslover';
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
    args:{
        categoryId:{type:GraphQLInt},
        offset:{type:GraphQLInt},
        search:{type:GraphQLString}
    },
    resolve:GetAllLimit
}

export const filmGetAllNoLimit={
    type:new GraphQLList(TypeFilm),
    resolve:GetAll
}