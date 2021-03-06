const {buildSchema} = require('graphql');

module.exports=buildSchema(`
type Quote {
    _id: ID!
    quote: string!
    author: String!
}
type QuoteData {
    quotes: [Quote!]!
}
type QuoteInputData {
    quote: String!
    author: string!
}
type RootQuery {
    quotes: QuoteData!
}
type RootMutation {
    createQuote(quoteInput: QuoteInputData): Quote!
}
Schema {
    query: RootQuery,
    mutation: RootMutation
}
`)