require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./utils/db");
const BookmarkRoute = require("./routes/Bookmark-routes");

// app.use(cors());
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/action", cors(corsOptions), BookmarkRoute);

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
connectDB(MONGO_URL).then(
  app.listen(PORT, () => {
    console.log("App is running on server : ", PORT);
  })
);
