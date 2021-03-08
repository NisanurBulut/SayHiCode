import gql from "graphql-tag";

export const GET_QUOTES = gql`
{
  quotes {
    quotes {
      _id
      quote
      author
    }
  }
}
`;
export
const CREATE_QUOTE = gql`
  mutation createQuote($quote: String!, $author: String!) {
    createQuote(quoteInput: { quote: $quote, author: $author }) {
      _id
      quote
      author
    }
  }
`;

export const DELETE_QUOTE = gql`
  mutation deleteQuote($id: ID!) {
    deleteQuote(id: $id) {
      _id
      quote
      author
    }
  }
`;