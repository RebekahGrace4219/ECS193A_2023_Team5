const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const userRouter = require("./routes/user");
const friendRouter = require("./routes/friend_list")

app.use("/user", userRouter);
app.use("/friend_list", friendRouter)

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})