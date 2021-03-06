import { GraphQLString, GraphQLInt } from 'graphql';
import { Create, Remove, Update } from './reslover';




export const filmCreate={
    type:GraphQLString,
    args:{
        name:{type:GraphQLString},
        categoryId:{type:GraphQLInt},
        description:{type:GraphQLString},
        publicYear:{type:GraphQLInt},
        authorId:{type:GraphQLInt},
        link:{type:GraphQLString},
        img:{type:GraphQLString}
    },
    resolve:Create
}


export const filmUpdate={
    type:GraphQLString,
    args:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        categoryId:{type:GraphQLInt},
        description:{type:GraphQLString},
        publicYear:{type:GraphQLInt},
        authorId:{type:GraphQLInt},
        link:{type:GraphQLString},
        img:{type:GraphQLString}
    },
    resolve:Update

}

export const filmRemove={
    type:GraphQLString,
    args:{
        id:{type:GraphQLInt},
    },
    resolve:Remove
}