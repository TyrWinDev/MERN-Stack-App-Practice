import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: '30Mb', extended: true }));
app.use(express.urlencoded({ limit: '30Mb', extended: true }));
app.use(cors());

//Set the routes with the selected prefix
app.use('/posts', postRoutes);

//Connection URL This will be moved to the .env file and then imported as needed
const CONNECTION_URL =
  'mongodb+srv://tyrdev:tyrdev1234@cluster0.h0ung.mongodb.net/storybooks?retryWrites=true&w=majority';
//Port to use This will be moved to the .env file and then imported as needed
const PORT = process.env.PORT || 2121;

//Connection to the DB
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
