const express = require('express');
const authRoute = require('./routes/auth.jsx');

// Francisco Costa
// ...

const app = express();

app.use(express.json());

app.use('/', authRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
