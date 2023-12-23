import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  userMessage: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

});

export const Message = mongoose.model('Message', messageSchema);


