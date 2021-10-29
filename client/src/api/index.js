import axios from 'axios';

const url = 'http://localhost:2121/posts';

export const fetchPost = () => axios.get(url);
