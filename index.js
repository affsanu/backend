const express = require('express');
const dbConn = require('./database/db');
const UserRouter = require('./routes/UserRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConn();

app.listen();

app.use('/api/v1', UserRouter);