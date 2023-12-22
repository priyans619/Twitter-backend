import express from 'express';

import { PORT, mongoURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/');

app.listen(PORT, () => {
  console.log('App is listening to port: ${PORT}')
})


mongoose
.connect(mongoURL)
.then(() => {
    console.log('Server is connected to database');
})
.catch((error) => {
    console.log(error);

});