import express from "express";
import graphqlHTTP from "express-graphql";
import {schema} from "./schema";

const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,function(){
    // eslint-disable-next-line no-console
    console.log("Listening port 4000....");
});