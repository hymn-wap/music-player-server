const PlayList = require("../models/playList");
const Song = require('../models/song');

exports.getPlayListByUserId =(req, res, next) => {
    res.json(PlayList.getPlayListByUserId(req.params.id));
}

exports.deleteSongFromPlayList = (req, res, next) => {
    PlayList.deleteSongFromPlayList(req.params.id, req.body.sId)
    res.status(204).end();
}

exports.addSongToPlayList = (req, res, next) => {
    const song = Song.getSongById(req.body.sId)
    // let playList = PlayList.getPlayListById(req.params.id)
    // // playList.addSongToList(song)
    // console.log("playList.songs = " + playList.songs)
    // playList.songs.push(song)
    // console.log("playList.songs = " + playList.songs)
    console.log("req.params.id = " + req.params.id)
    console.log("song = " + song)
    PlayList.addSongToList(req.params.id, song)
    res.status(204).end();
}

//return module.exports