import express, { response } from "express";
const router = express.Router();
import { User } from "../models/userModel.js";
import { Message } from "../models/messageModel.js";
import { Follower } from "../models/followModel.js";


router.get('/GetMyFeed/:username', async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username })
    .populate({
      path: 'messages',
      populate: {
        path: 'author',
        model: 'User',
        select: 'username'
      }
    }); //This will add all the details of users message 

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }


    // Get the IDs of users the current user is following
    const followingUsers = (await Follower.find({ follower: user._id })).map(f => f.followee);

    // Fetch messages from those users
    const followingMessages = await Message.find({ user: { $in: followingUsers } });

    // Combine user's messages with following users' messages
    const allMessages = user.messages.concat(followingMessages);

    // Sort messages by createdAt in descending order (chronological)
    const sortedMessages = allMessages.sort((a, b) => b.createdAt - a.createdAt);

    response.status(200).json({ messages: sortedMessages });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;

