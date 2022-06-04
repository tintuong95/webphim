import { GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLList } from 'graphql';
import TypeFilm from '../films/type';




const TypeCategory:GraphQLObjectType=new GraphQLObjectType({
        name:"category",
        fields:()=>({
            id:{type:GraphQLInt},
            name:{type:GraphQLString},
            film:{type:new GraphQLList(TypeFilm)}
        })

})


export default TypeCategory