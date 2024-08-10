const express = require('express')
const { createBookmark, deleteBookmark, getAllBookmark, updateBookmark, getBookmarkById } = require('../controllers/Bookmark-controller')
const router = express.Router()

router.route('/createBookmark').post(createBookmark)
router.route('/deleteBookmark/:id').delete(deleteBookmark)
router.route('/getAllBookmarks').get(getAllBookmark)
router.route('/getBookmarkById/:id').get(getBookmarkById)
router.route('/updateBookmark/:id').put(updateBookmark)


module.exports = router