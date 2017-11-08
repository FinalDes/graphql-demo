import express from "express";
import graphqlHTTP from "express-graphql";
import {schema} from "./schema";

const app = express();
const port = 4000;

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port,function(){
    // eslint-disable-next-line no-console
    console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`);
});