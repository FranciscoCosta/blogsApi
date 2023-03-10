const express = require('express');
const authRoute = require('./routes/auth.jsx');
const userRoute = require('./routes/user.jsx');
const categoryRoute = require('./routes/category.jsx');
const postRoute = require('./routes/post.jsx');

// Francisco Costa
// ...

const app = express();

app.use(express.json());

app.use('/', authRoute);
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
