const express = require('express');
const songController = require('../controllers/songController');

const router = express.Router();

router.post('/', songController.save);
router.get('/', songController.fetchAll);
router.get('/:id', songController.getSongById);
router.delete("/:id", songController.deleteById);
router.put("/:id", songController.update);

module.exports = router;