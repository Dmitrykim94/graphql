const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const app = express();
const mongoose = require("mongoose");
const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')

mongoose.connect('mongodb://localhost:27017/graphqlStud', { useNewUrlParser: true });



app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    if (req.method === 'OPTIONS'){
        return res.sendStatus(200)
    }
    next()
})

app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}))

app.listen(4000);