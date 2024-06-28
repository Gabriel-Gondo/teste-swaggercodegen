yarn create vite

npm install -g @openapitools/openapi-generator-cli
openapi-generator-cli generate -i http://localhost:3000/api-json -g typescript-fetch -o ./path-to-generated-client

openapi-generator-cli generate -i https://petstore.swagger.io/v2/swagger.json -g typescript-fetch -o ./path-to-generated-client
