const express = require("express");
const mongoose = require("mongoose");
const createError = require("http-errors");
require("dotenv").config();

const playlistRoute = require("./routes/playlist");
const userRoute = require("./routes/user");

const app = express();
const PORT = process.env.PORT;
var cors = require("cors");
app.use(cors());
//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3&key=MY_API_KEY

const uri =
  "mongodb+srv://dempressed:qwerty%40123@cluster0.u3woz.mongodb.net/courson?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongo DB running");
  }
);
app.use(express.json());

app.use("/playlist", playlistRoute);

app.get("/test", (req, res) => {
  res.send({
    message: "Test successful",
  });
});

app.use("/user", userRoute);

app.use((req, res, next) => {
  next(createError(404, "Not Found Route"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT,process.env.HOST, () => {
  console.log("API started");
});
