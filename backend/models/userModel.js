import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password:
    {
      type: String,
      required: true
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
      }],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }],
  });


export const User = mongoose.model('User', userSchema);