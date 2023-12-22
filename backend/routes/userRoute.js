import express from 'express';
const router = express.Router();
import { User } from '../models/userModel.js';

router.post('/signup', async (request, response) => {
  try {
    if (
      !request.body.username ||
      !request.body.password
    ) {
      return response.status(400).send({
        message: 'Send all required fields: username, password',
      });
    }
    const newUser = {
      username: request.body.username,
      password: request.body.password,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);
    
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
