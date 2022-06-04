import { GraphQLList } from 'graphql';
import { GraphQLInt } from 'graphql';
import { get, gets } from './resolver';
import TypeCategory from "./type";



const categoryGet={
    type:TypeCategory,
    args:{
        id:{type:GraphQLInt}
    },
    resolve:get
}


const categoryGets={
    type:new GraphQLList(TypeCategory),
    resolve:gets
}

export {categoryGet,categoryGets}