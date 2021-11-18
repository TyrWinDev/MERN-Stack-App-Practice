import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

//Allows the usage of our .env file
dotenv.config();

app.use(express.json({ limit: '30Mb', extended: true }));
app.use(express.urlencoded({ limit: '30Mb', extended: true }));
app.use(cors());

//Set the routes with the selected prefix
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

//Port to use This will be moved to the .env file and then imported as needed
const PORT = process.env.PORT || 2121;

//Connection to the DB
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
