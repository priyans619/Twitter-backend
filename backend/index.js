import express from 'express';
import dotenv  from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';
import messageRoutes from './routes/messageRoutes.js';
import followRoute from './routes/followRoute.js';
import feedRoute from './routes/feedRoute.js'

const app = express();

// for loading process.env from config
dotenv.config();

// creating server route 
app.get('/', (request, response) => {
  console.log(request)
  return response.status(201).send('Welcome to Twitter')
});

// parsing request
app.use(express.json());

// Middleware for all Routes
app.use('/user', userRoute);
app.use('/message', messageRoutes)
app.use('/follow', followRoute)
app.use('/feed', feedRoute)

mongoose
.connect(process.env.mongoURL)
.then(() => {
    console.log('Server is connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    })
    // put 'app.listen' method inside .then()" 
    // for xerver to run if db isconecteed
})
.catch((error) => {
    console.log(error);

});