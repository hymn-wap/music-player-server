const PlayList = require("../models/playList");
const Song = require('../models/song');
const jwt = require("jsonwebtoken");

exports.getPlayListByUserId =(req, res, next) => {
    console.log("18181");
    let token = req.headers['authorization'];
    let decoded = jwt.verify(token, 'secret');
    console.log('userId: '+decoded.userId+'  token:'+token);
    res.json(PlayList.getPlayListByUserId(decoded.userId));
}

exports.deleteSongFromPlayList = (req, res, next) => {
    PlayList.deleteSongFromPlayList(req.params.id, req.body.sId)
    res.status(204).end();
}

exports.addSongToPlayList = (req, res, next) => {
    console.log("191919");
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