if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to the DataBase'));

const specialistRouter = require('./routes/specialists');
const userRouter = require('./routes/users');
app.use('/specialists', specialistRouter);
app.use('/users', userRouter);

app.listen(process.env.PORT);
