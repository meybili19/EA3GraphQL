# EA3GraphQL
 
## Install dependencies
    - Install node.js in VS Code
    - In another case, install the dependencies in a terminal 
npm install express express-graphql graphql swagger-jsdoc swagger-ui-express

## Run the API

    - With the code: 
    node server.js
    run the API

## Access to the urls

For swagger: http://localhost:4000/api-docs
For GraphQL: http://localhost:4000/graphql

## Docker
    - docker network create graphql-network
    - docker build -t meybili/graphql-api .
    - docker run --name graphql-api-container --network graphql-network -p 4000:4000 -d meybili/graphql-api
