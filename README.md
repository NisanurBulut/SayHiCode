## Give a Star! :star:
If you like or are using this project to learn or start your solution, please give it a star. Thanks!

### SayHiGithub
With this application, the use of react hooks and context api has been implemented. Hooks used: useState, useContext, useEffect
![SayHiGithub](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/Trailer_SayHiCode.gif)

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/nisanurbulut)
- [Repos](https://api.github.com/users/nisanurbulut/repos?per_page=100)
- [Followers](https://api.github.com/users/nisanurbulut/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.


### SayHiMERN
<hr>
GraphQL api and MongoDb database are used in this application.User object performs booking and home event operations with GraphQl API.the user subscribes to the application and logs on. It receives token data at the login process. With this token information, the application can be online.
* React-material is used in interface designs.
- If the user is not the owner of the event, he / she cannot see the detail information.
- inserted react-material-spinner for waiting to response of api
- The user views event detail in popup
- The user can make the reservation via popup.
- Avoided fetching data if components are inactive.
- Each user can see their own booking list.
- Each user can see their own event list.
- The user can cancel the reservation.

![SayHiMERN](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/Trailer_SmartBook.gif)

## SmartBook API

- [Root Endpoint](http://localhost:8000/smartBookingApi)
- [Get Events](http://localhost:8000/smartBookingApi/events)
- [Get Bookings](http://localhost:8000/smartBookingApi/bookings)
- [Login](http://localhost:8000/smartBookingApi/nisanurbulut/login)
- [Create Event](http://localhost:8000/smartBookingApi/nisanurbulut/createEvent)
- [Create User](http://localhost:8000/smartBookingApi/nisanurbulut/createUser)
- [Get Book Event](http://localhost:8000/smartBookingApi/nisanurbulut/bookEvent)
- [Cancel Booking](http://localhost:8000/smartBookingApi/nisanurbulut/cancelBooking)

[for GraphQL Documentation](https://github.com/NisanurBulut/SayHiCode/blob/master/sayHiMern/Readme.md)

### Installation
- npm install --save express body-parser
- npm install --save-dev nodemon
- npm install --save dataloader

### SayHiMEAN
<hr>
In this study, practice of grahql, apollo and angular has been done.

- Accesses mongodb database with GraphQl API.
- Angular FW is used on the frontend side.

![SayHiMEAN](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/Trailer_SayHiMean.gif)

### Installation
- npm i express express-graphql graphql mongoose body-parser cors


### SayHiSemanticUi
This work is a MERNG application. Users share book status.The database is MongoDb and the backend is GraphQL.The user interface has been developed with ReactJs and SemanticUI components.
<hr>

- Implemented apollo custom errors form form validation
- Created files&folders structure
- After login action user has token
- User can add book post
- User delete book post
- User delete his/her comment
- User can like other user's book posts
- User can comment on other users' book posts
- Users register with the application
- After login action user has token
- Showed error messages
- Used loading component for waiting processes
- Implemented custom hooks

![SaySemanticUi](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/Trailer_SayHiSemanticUi.gif)

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

### SayHiReactQuery
<hr>
This study demonstrates the use of the React-Jquery library.In addition, the use of react-material and component-style are shown.

- The fakestoreapi API source lists fake product information.
- The product can be added to the cart
- The amount of product in the cart can be changed.
- As the amount of product changes, the total cost is recalculated.
- Product can be removed from the basket.

## Installation
- npx create-react-app SayHiReactQuery --template typscript
- npm i @material-ui/core @material-ui/icons
- npm i react-query
- npm i styled-components @types/styled-components

![SayHiReactQuery](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/Trailer_SayHiReactQuery.gif)

### SayHiLaravel
<hr>
With this study, a social media application was made using Laravel Framework at a simple level. Sqlite database has been used.Tailwind CSS is used in frontend design.

- The user can become a member of the application.
- The user can log in to the application.
- The user can share posts.
- The user can view other users' posts.
- The user can delete their own post.
- The user can like the post.
- The posts belonging to the user are listed separately.
- The user's email, name, user name, membership period information are displayed.
- When the user likes, an e-mail is sent via mailtrap.
- Spam sending has been blocked.
- The liking is soft-deleting.
## Installation
- composer global require laravel
- laravel new projectName
- php artisan serve
- npm install tailwindcss
- npm install

  ![SayHiLaravel](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/Trailer_SayHiLaravel.gif)
## Helpfull Websites
  [json-to-js](https://www.convertonline.io/convert/json-to-js) [fusioncharts](https://www.fusioncharts.com/)  [React-Query-Tutorial](https://www.youtube.com/watch?v=XRbnuiAbV3g&list=PLzJ4DQ1UrlRb0XiN-vecbtZ31t-Q2Z6BD&ab_channel=boraoren) [FakeStoreAPI](https://fakestoreapi.herokuapp.com/)[Laravel-artisan-blog](https://www.yasird.com/laravel-5-artisan-nedir/) [MailTrap](https://mailtrap.io/) [HeroIcons](https://heroicons.com/)