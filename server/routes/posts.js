import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';

const router = express.Router();

//This file handles the routes for our application.
//Routes here are http://localhost:2121/posts
router.get('/', getPosts);
router.post('/', createPost);
//Patch is used for routes that update previous data
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
