const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = gql`
    type Game {
        gameId: ID!
        gameName: String
        publisher: Publisher @relationship(type: "PUBLISHED_BY", direction: OUT)
        platform: Platform @relationship(type: "ON_PLATFORM", direction: OUT)
        genre: Genre @relationship(type: "HAS_GENRE", direction: OUT)
    }

    type Publisher {
        publisherId: String!
    }

    type Platform {
        platformId: String!

    }

    type Genre{
        genreId: String!
    }
`;

const driver = neo4j.driver(
    "neo4j://it2810-17.idi.ntnu.no:7687",
    neo4j.auth.basic("neo4j", "neo4j")
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema,
    });

    server.listen(8080).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})