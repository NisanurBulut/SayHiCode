const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Quote {
    _id: ID!
    quote: String!
    author: String!
  }
  type QuoteData {
    quotes: [Quote!]!
  }
  input QuoteInputData {
    quote: String!
    author: String!
  }
  type RootQuery {
    quotes: QuoteData!
  }
  type RootMutation {
    createQuote(quoteInput: QuoteInputData): Quote!
    updateQuote(id: ID!, quoteInput: QuoteInputData): Quote!
    deleteQuote(id: ID!): Quote!
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);