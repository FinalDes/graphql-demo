import {GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
// tslint:disable object-literal-sort-keys
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
