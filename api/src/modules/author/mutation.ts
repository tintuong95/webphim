import { GraphQLString, GraphQLInt } from 'graphql';
import { create, remove, update } from './resolver';



const authorCreate = {
    type: GraphQLString,
    args: {
      name: { type: GraphQLString },
    },
    resolve: create,
  };
  
  const authorUpdate = {
    type: GraphQLString,
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
    },
    resolve: update,
  };
  
  const authorDelete = {
    type: GraphQLString,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: remove,
  };

  export {  authorCreate, authorUpdate, authorDelete };
