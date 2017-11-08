const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,function(){
    // eslint-disable-next-line no-console
    console.log("GraphQL Server is now running on http://localhost:4000/graphql");
});