import {GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        greet: {
            type: GraphQLString,
            resolve() {
                return "Hello World";
            },
        },
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});
