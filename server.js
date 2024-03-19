if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
  console.log('Connected to the DataBase');
  app.listen(process.env.PORT);
});

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const specialistRouter = require('./routes/specialists');
const userRouter = require('./routes/users');
app.use('/specialists', specialistRouter);
app.use('/users', userRouter);
