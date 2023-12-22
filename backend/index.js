import express from 'express';

import { PORT, mongoURL } from './config.js';
import mongoose from 'mongoose';

const app = express();

// creating server route 
app.get('/', (request, response) => {
  console.log(request)
  return response.status(201).send('Welcome to Twitter')
});

// parsing request
app.use(express.json());

mongoose
.connect(mongoURL)
.then(() => {
    console.log('Server is connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    })
    // put 'app.listen' method inside .then()" 
    // for xerver to run if db isconecteed
})
.catch((error) => {
    console.log(error);

});