import express from 'express';
const router = express.Router();
import { User } from "../models/userModel.js";
import { Message } from "../models/messageModel.js";
import { Follower } from '../models/followModel.js';

router.post('/post-message', async (request, response) => {
  try {
    const { username, userMessage } = request.body;

    const user = await User.findOne({ username });

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    const newMessage = new Message({ userMessage, author: user._id });
    await newMessage.save();

    user.messages.push(newMessage._id);
    await user.save();

     // the message will sent to followers feed
     const followers = await Follower.find({ followee: user._id });
     followers.forEach(async (follower) => {
       const followerUser = await User.findById(follower.follower);
       followerUser.messages.push(newMessage._id);
       await followerUser.save();
     });

    response.status(201).json({ message: 'Message posted successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;