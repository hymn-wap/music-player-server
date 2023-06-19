const playList = [
    {
        "id": 1,
        "songs": [
            {
                "id": 2,
                "title": "My Heart Will Go On",
                "releaseDate": "1998-12-20",
                "artist": "Celine Dion"
            },
            {
                "id": 3,
                "title": "Nothing'S Gonna Change My Love",
                "releaseDate": "1998-12-15",
                "artist": "Dana Winner"
            }
        ],
        "userId": 1,
        "name": "My Favoriate"
    },

    {
        "id": 2,
        "songs": [
            {
                "id": 4,
                "title": "Pretty Boy",
                "releaseDate": "1994-3-15",
                "artist": "M2M"
            },
            {
                "id": 5,
                "title": "Scarborough Fair",
                "releaseDate": "1994-03-12",
                "artist": "Sarah Brightman"
            },
            {
                "id": 6,
                "title": "Sealed With A Kiss",
                "releaseDate": "1991-3-15",
                "artist": "Dana Winner"
            }
        ],
        "userId": 2,
        "name": "Super Cool list"
    }
];
let idcounter = 3;

module.exports = class PlayList {

    constructor(id, name, userId, songs) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.songs = songs;
    }

    // create a playList for new user
    save() {
        this.id = idcounter++;
        playList.push(this);
        return this;
    }

    static getAll() {
        return playList;
    }

    static getPlayListById(pId) {
        const result = playList.find(pl => pl.id === parseInt(pId));
        if (result) {
            return result;
        } else {
            throw new Error(`Couldn't find user's playList with user id: ${id}`);
        }
    }

    //get user's playlist
    static getPlayListByUserId(userId) {
        const result = playList.find(pl => pl.userId === parseInt(userId));
        if (result) {
            return result;
        } else {
            throw new Error(`Couldn't find user's playList with user id: ${id}`);
        }
    }


    static deleteSongFromPlayList(pId, songId) {
        const playList = this.getPlayListById(pId)
        const index = playList.songs.findIndex(s => s.id === parseInt(songId));
        if (index > -1) {
            playList.songs.splice(index, 1);
        } else {
            throw new Error(`Couldn't find song with id: ${songId}`);
        }
    }

    static addSongToList(pId, song) {
        const playList = this.getPlayListById(pId)
        const songId = song.id;
        // Check if the song already exists in the playlist
        const existingSong = playList.songs.find(s => s.id === songId);
        if (existingSong) {
            throw new Error(`Song with id ${songId} already exists in the playlist.`);
        }
        // Add the song to the playlist's songs array
        playList.songs.push(song);
        // console.log("playList.songs =", playList.songs);
    }

    static editSongInfo(sId, title, artist, releaseDate) {
        playList.forEach(pl => {
            const existingSong = pl.songs.find(s => s.id === sId);
            // console.log("existingSong = " + JSON.stringify(existingSong))
            if (existingSong) {
                existingSong.title = title;
                existingSong.releaseDate = releaseDate;
                existingSong.artist = artist;
            }
        });
    }

    static deleteSongInfo(sId) {
        playList.forEach(pl => {
            const index = pl.songs.findIndex(s => s.id === parseInt(sId));
            if (index > -1) {
                pl.songs.splice(index, 1);
            }
        });
    }
}
