import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({ limit: '30Mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Connect to DB
const CONNECTION_URL =
;

//Port to use
const PORT = process.env.PORT || 2121;

mongoose
  .connect(CONNECTION_URL, {
    useNewURLparser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.list(PORT, () => console.log(`Server Running on: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
