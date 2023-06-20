const { musicDB } = require('../models/song')

const getSongs = (searchText) => {
  let songs = musicDB;
  if (searchText) {
    songs = musicDB.filter(m => m.title.toLowerCase().includes(searchText.toLowerCase()));
  }
  return songs;
}

module.exports = { getSongs };