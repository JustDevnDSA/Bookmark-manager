const mongoose = require("mongoose");

const BookmarkSchma = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const BookmarkModel = new mongoose.model("Bookmark", BookmarkSchma);

module.exports = BookmarkModel;
