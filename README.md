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

<b>GraphQL</b> REST API yazmak yerine kullanılabilecek bir sorgu dilidir.

- GraphQL hiçbir veritabanı türüne bağlı değildir.
![Architect](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/sayHiGraphQL/images/architect.png)
<br>

![Architect](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/sayHiGraphQL/images/restApiLimits.png)
<br>

<b>Query</b> içerisine yazılabilecek sorgulama işlemlerini tanımlıyoruz. buraya yazdığımız tanımlamalar dışında herhangi birşey çalıştıramayız.

![query](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/sayHiGraphQL/images/query.png)
<br>

<b>Mutation</b>Veri oluşturma, silme ve güncelleme işlemleri için bu alanı kullanıyoruz.
<b>Subscriptionlar</b> server tarafında belirli bir event gerçekletiğinde WebSoket kullanarak belirtilen datayı gerçek zamanlı olarak client’a gönderir.

![operationTypes](https://github.com/NisanurBulut/SayHiCode/blob/master/Trailers/sayHiGraphQL/images/operationTypes.png)

### GraphQL Bileşenleri
Projemizde client ve server taraflarında ayrı tanımlamalar yapmamızı sağlar. Client tarafında bunlar Queries,Mutation, Fragment
Server tarafında ise Type Definition, Query Definition, Mutation Definition, Resolvers, Composition, Schema olarak ayırmak mümkün.

### Installation
- npm install --save express body-parser
- npm install --save-dev nodemon

## Helpfull Websites
  [json-to-js](https://www.convertonline.io/convert/json-to-js) [fusioncharts](https://www.fusioncharts.com/)