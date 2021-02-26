const express = require('express');
const bodyParser = require('body-parser');

const app= express();

app.use(bodyParser.json());
app.listen(1992);