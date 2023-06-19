const Song = require('../models/song');
const path = require('path');
const PlayList = require("../models/playList");

exports.save = (req, res, next) => {
    const s = new Song(null, req.body.title, req.body.releaseDate, req.body.artist).save();
    res.status(201).json(s);
};

exports.fetchAll = (req, res, next) => {
    res.json(Song.getAll());
}

exports.getSongById = (req, res, next) => {
    res.json(Song.getSongById(req.params.id));
}

exports.deleteById = (req, res, next) => {
    new Song(req.params.id).delete();
    // delete song from PlayList as well
    PlayList.deleteSongInfo(req.params.id)
    res.status(204).end();
}

exports.update = (req, res, next) => {
    new Song(req.params.id, req.body.title, req.body.releaseDate, req.body.artist).update();
    // update song info from PlayList as well
    PlayList.editSongInfo(req.body.id, req.body.title, req.body.releaseDate, req.body.artist)
    res.status(204).end();
}

exports.playSong = (req, res) => {
    const { id } = req.params;
    try {
        const song = Song.getSongById(Number(id));
        // Logic to play the song using the filePath
        res.json({
            message: `Now playing '${song.title}' by '${song.artist}'`,
            url: `http://${req.get('host')}/${song.url}`
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//return module.exports