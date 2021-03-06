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
type RootQuery {
    quotes: QuoteData!
}
Schema {
    query: RootQuery
}
`)