const graphql = require("graphql");
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLString = graphql.GraphQLString;

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        greet:{
            type: GraphQLString,
            resolve(){
                return "Hello World";
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});