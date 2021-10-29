import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//This file handles the routes for our application.
//Routes here are http://localhost:2121/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;
