//This file handles the logic for our different routes. It controls them.... Oh GOD!
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  //We request the post from the body here
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    //We save each new post created
    await newPost.save();
    //Successful creation is responded.
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
