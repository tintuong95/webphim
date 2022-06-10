import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
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
        author:{type:TypeAuthor},
        img:{type:GraphQLString},
        link:{type:GraphQLString},
        categoryId:{type:GraphQLInt},
        authorId:{type:GraphQLInt},
        
    })
})

export default TypeFilm