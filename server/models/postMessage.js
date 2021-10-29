import mongoose from 'mongoose';

//A Schema gives us uniformity, basically each post is going to have the followin structure.
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    defautl: new Date(),
  },
});

//We export the model here
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
