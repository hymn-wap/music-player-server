const express = require('express');
const playListController = require('../controllers/playListController');

const router = express.Router();

router.post('/:id/song', playListController.addSongToPlayList);
router.get('/:id', playListController.getPlayListByUserId);
router.delete("/:id/song", playListController.deleteSongFromPlayList);

module.exports = router;