const express = require('express');
const router = express.Router();
const { createComment, getComments } = require('../controllers/commentController');

router.post('/comments', createComment);
router.get('/comments/:blogId', getComments);

module.exports = router;