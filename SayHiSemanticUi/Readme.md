
### SayHiSemanticUi
<hr>

- Implemented apollo custom errors form form validation
- Created files&folders structure
- After login action user has token
- User can add book post
- User delete book post
- User can like other user's book posts
- User can comment on other users' book posts
- Users register with the application
- After login action user has token
- Showed error messages
- Used loading component for waiting processes
- Implemented custom hooks

### Entities

| BookPost              | Comment           | Like               | User              |RegisterInput             |
|-----------------------|:-----------------:|:------------------:|:-----------------:|-------------------------:|
| id: ID!               | id: ID!           | id: ID!            | id: ID!           | username: String!        |
| author: String!       | createdAt: String!| createdAt: String! | email: String!    | password: String!        |
| name: String!         | username: String! | username: String!  | token: String!    | confirmPassword: String! |
| user: User!           | id: ID!           |                    | username: String! | email: String!           |
| createdAt: String!    | body: String!     |                    | createdAt: String!| imageUrl: String!        |
| comments:[Comment]!   |                   |                    | imageUrl: String! |                          |
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

## Helpfull Websites
  [json-to-js](https://www.convertonline.io/convert/json-to-js) [fusioncharts](https://www.fusioncharts.com/)