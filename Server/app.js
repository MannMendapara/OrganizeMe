import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import mongoose from "mongoose";
import Task_router from "./routes/Task_Route.js";
import User_Router from './routes/user.js'
import Auth_Router from "./routes/Auth.js";
import auth from "./Middleware/auth.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// MongoURL and connection
const escapedPassword = encodeURIComponent(process.env.MONGO_PASS);
const DB = `mongodb+srv://mannmendapara13:${escapedPassword}@cluster0.qlgh43q.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection to MongoDB successful");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Middleware Functions
app.use(express.json());
app.use(cors());

app.use('/', User_Router);
app.use('/auth', Auth_Router);
app.use('/user', Task_router);

// Server
app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
