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

    return response.status(201).send({ 
      message: 'User created successfully',
      user: {
        id: user._id,
        username: user.username
    }
    });
    
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.post('/login', async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return response.status(401).json({ error: 'Invalid username or password' });
    }

    response.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
