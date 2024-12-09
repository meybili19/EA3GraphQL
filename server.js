const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerDocs');

const app = express();

// Define GraphQL schema
const schema = buildSchema(`
    type Query {
        meybili: String
    }
`);

// Define resolvers
const root = {
    meybili: () => 'Hello world with JavaScript using architecture style GraphQL!',
};

// Set up GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// Swagger documentation setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`GraphQL API running at http://localhost:${PORT}/graphql`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
