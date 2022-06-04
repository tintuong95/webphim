import { GraphQLString, GraphQLInt } from 'graphql';
import { create, remove, update } from './resolver';





const categoryCreate={
    type:GraphQLString,
    args:{
        
        name:{type:GraphQLString}
    },
    resolve:create
}

const categoryUpdate={
    type:GraphQLString,
    args:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString}
    },
    resolve:update
}


const categoryDelete={
    type:GraphQLString,
    args:{
        id:{type:GraphQLInt}
    },
    resolve:remove
}

export {categoryCreate,categoryDelete,categoryUpdate}