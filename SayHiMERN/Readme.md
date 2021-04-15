<b>GraphQL</b> REST API yazmak yerine kullanılabilecek bir sorgu dilidir.

- GraphQL hiçbir veritabanı türüne bağlı değildir.
![Architect](https://github.com/NisanurBulut/SayHiCode/blob/master/sayHiMern/images/architect.png)
<br>

![Architect](https://github.com/NisanurBulut/SayHiCode/blob/master/sayHiMern/images/restApiLimits.png)
<br>

<b>Query</b> içerisine yazılabilecek sorgulama işlemlerini tanımlıyoruz. buraya yazdığımız tanımlamalar dışında herhangi birşey çalıştıramayız.

![query](https://github.com/NisanurBulut/SayHiCode/blob/master/sayHiMern/images/query.png)
<br>

<b>Mutation</b>Veri oluşturma, silme ve güncelleme işlemleri için bu alanı kullanıyoruz.
<b>Subscriptionlar</b> server tarafında belirli bir event gerçekletiğinde WebSoket kullanarak belirtilen datayı gerçek zamanlı olarak client’a gönderir.

![operationTypes](https://github.com/NisanurBulut/SayHiCode/blob/master/sayHiMern/images/operationTypes.png)

### GraphQL Bileşenleri
Projemizde client ve server taraflarında ayrı tanımlamalar yapmamızı sağlar. Client tarafında bunlar Queries,Mutation, Fragment
Server tarafında ise Type Definition, Query Definition, Mutation Definition, Resolvers, Composition, Schema olarak ayırmak mümkün.

### Installation
- npm install --save express body-parser
- npm install --save-dev nodemon
- npm install --save jsonwebtoken
- npm install --save react-router-dom
