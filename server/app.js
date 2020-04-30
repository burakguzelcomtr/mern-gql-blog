//server app
const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema.js');

const app = express();
const port = 8000;

// Middleware with graphql endpoint
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(port, ()=>{
    // console.log('Server çalışıyor...'); 
});