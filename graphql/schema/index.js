const {buildSchema} = require('graphql')

module.exports = buildSchema(`
        type Event {
            _id: ID!
            title: String!
            describtion: String!
            price: Float!
        }

        input EventInput {
            title:String!
            describtion: String!
            price: Float!
        }

        type User {
            _id: ID!
            email:String!
            password: String
        }
        input UserInput {
            email:String!
            password:String!
        }
        type RootQuery {
            events: [Event!]!
        }
        type RootMutation {
            createEvent(eventInput: EventInput): Event
            createUser(userInput: UserInput): User
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `)