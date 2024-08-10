const { model } = require("mongoose");
const BookmarkModel = require("../models/Bookmark-model");

//? CREATE A BOOKMARK
const createBookmark = async (req, res) => {
  try {
    const { category, title, link } = req.body;
    const newBookmark = new BookmarkModel({ category, title, link });
    await newBookmark.save();
    res.status(201).json({
      message: "Bookmark added",
      success: true,
      bookmark: newBookmark,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating bookmark", success: false });
  }
};

//? DELETE A BOOKMARK
const deleteBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBookmark = await BookmarkModel.findByIdAndDelete(id);
    if (!deletedBookmark) {
      return res
        .status(404)
        .json({ message: "Error deleting bookmark", success: false });
    }
    res.status(200).json({ message: "Bookmark deleted", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting bookmark", success: false });
  }
};

//? GETTING ALL THE BOOKMARKS
const getAllBookmark = async (req, res) => {
  const bookmarks = await BookmarkModel.find({});
  res.status(200).json({ success: true, bookmarks });
};

//? GET A BOOKMARK BY ID
const getBookmarkById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookmark = await BookmarkModel.findById(id);
    if (!bookmark) {
      res.status(404).json({ success: false, message: "Bookmark not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Bookmark Found", bookmark });
  } catch (error) {
    res.status(404).json({ success: false, message: "Bookmark not found" });
  }
};

//? UPDATE A BOOKMARK
const updateBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, title, link } = req.body;
    const bookmark = await BookmarkModel.findByIdAndUpdate(id, {
      category,
      title,
      link,
    });
    if (!bookmark) {
      res.status(404).json({ success: false, message: "Bookmark not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Bookmark updated", bookmark });
  } catch (error) {
    res.status(404).json({ success: false, message: "Bookmark not found" });
  }
};

module.exports = {
  createBookmark,
  deleteBookmark,
  getAllBookmark,
  updateBookmark,
  getBookmarkById,
};
