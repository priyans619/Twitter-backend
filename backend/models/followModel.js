import mongoose from "mongoose";

const followerSchema = mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  followee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

export const Follower = mongoose.model('Follower', followerSchema);