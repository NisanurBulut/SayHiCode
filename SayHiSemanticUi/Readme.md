### SayHiSemanticUi
<hr>

- Implemented apollo custom errors
- Created files&folders structure
- After login action user has token

### Entities

| BookPost              | Comment           | Like               | User              |RegisterInput             |
|-----------------------|:-----------------:|:------------------:|:-----------------:|-------------------------:|
| id: ID!               | id: ID!           | id: ID!            | id: ID!           | username: String!        |
| author: String!       | createdAt: String!| createdAt: String! | email: String!    | password: String!        |
| name: String!         | username: String! | username: String!  | token: String!    | confirmPassword: String! |
| username: String!     | id: ID!           |                    | username: String! | email: String!           |
| createdAt: String!    | body: String!     |                    | createdAt: String!|                          |
| comments: [Comment]!  |                   |                    |                   |                          |
| likes: [Like]!        |                   |                    |                   |                          |
| likeCount: Int!       |                   |                    |                   |                          |
| commentCount: Int!    |                   |                    |                   |                          |

- Query
  * getBookPosts: [BookPost]
  * getBookPost(postId: ID!): BookPost
- Mutation
  * register(registerInput: RegisterInput): User!
  * login(username: String!, password: String!): User!
  * createBookPost(author: String!, name: String!): BookPost!
  * deleteBookPost(postId: ID!): String!
  * createComment(postId: String!, body: String): BookPost!
  * deleteComment(postId: String!, commentId: ID!): BookPost!
  * likeBookPost(postId: ID!): BookPost!
- Subscription
  * newBookPost: BookPost!


### Installation
- npm install apollo-server grahql mongoose
- npm install bcryptjs jsonwebtoken
- npm install @apollo/react-hooks apollo-cache-inmemory apollo-link-http apollo-client
- npm install --save dataloader