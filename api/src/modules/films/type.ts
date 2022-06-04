import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import TypeAuthor from '../author/type';
import TypeCategory from '../category/type';


const TypeFilm:GraphQLObjectType =new GraphQLObjectType({
    name:"film",
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        category:{type:TypeCategory},
        description:{type:GraphQLString},
        publicYear:{type:GraphQLInt},
        author:{type:TypeAuthor}
    })
})

export default TypeFilm