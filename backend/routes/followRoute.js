import express from "express";
const router = express.Router();
import { Follower } from "../models/followModel.js";
import { User } from "../models/userModel.js";


router.post('/follow-user', async (request, response) => {
  try {
    const { followerUsername, followeeUsername } = request.body;

    const follower = await User.findOne({ username: followerUsername });
    const followee = await User.findOne({ username: followeeUsername });

    if (!follower || !followee) {
      return response.status(404).json({ error: 'User not found' });
    }

    // Check if the follower is not already following the user
    const existingFollower = await Follower.findOne({ follower: follower._id, followee: followee._id });
    if (!existingFollower) {
      const newFollower = new Follower({ follower: follower._id, followee: followee._id });
      await newFollower.save();
    }

    response.status(200).json({ message: 'User followed successfully' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;