const songs = [
    {
        "id": 1,
        "title": "Loving You",
        "releaseDate": "2012-12-13",
        "artist": "Shanice Wilson",
        "url": "LovingYou-ShaniceWilson.mp3"

    },
    {
        "id": 2,
        "title": "My Heart Will Go On",
        "releaseDate": "1998-12-20",
        "artist": "Celine Dion",
        "url": "MyHeartWillGoOn-CelineDion.mp3"
    },
    {
        "id": 3,
        "title": "NothingS Gonna Change My Love",
        "releaseDate": "1998-12-15",
        "artist": "Dana Winner",
        "url": "NothingSGonnaChangeMyLove-DanaWinner.mp3"
    },
    {
        "id": 4,
        "title": "Pretty Boy",
        "releaseDate": "1994-3-15",
        "artist": "M2M",
        "url": "PrettyBoy-M2M.mp3"
    },
    {
        "id": 5,
        "title": "Scarborough Fair",
        "releaseDate": "1994-03-12",
        "artist": "Sarah Brightman",
        "url": "ScarboroughFair-SarahBrightman.mp3"
    },
    {
        "id": 6,
        "title": "Sealed With A Kiss",
        "releaseDate": "1991-3-15",
        "artist": "Dana Winner",
        "url": "SealedWithAKiss-DanaWinner.mp3"
    },

    {
        "id": 7,
        "title": "Set Fire to the Rain",
        "releaseDate": "2017-2-15",
        "artist": "Adele",
        "url": "SetFireToTheRain-Adele.mp3"
    },
    {
        "id": 8,
        "title": "Someone Like You",
        "releaseDate": "2014-9-18",
        "artist": "Adele",
        "url": "SomeoneLikeYou-Adele.mp3"
    },
    {
        "id": 9,
        "title": "Sound Of Silence",
        "releaseDate": "2014-9-18",
        "artist": "Ania",
        "url": "SoundOfSilence-Ania.mp3"
    },
    {
        "id": 10,
        "title": "Stay",
        "releaseDate": "1996-1-23",
        "artist": "Tonya Mitchell",
        "url": "Stay-TonyaMitchell.mp3"
    },
    {
        "id": 11,
        "title": "Still Crazy in Love",
        "releaseDate": "2020-1-23",
        "artist": "Sarah Connor",
        "url": "StillCrazyInLove-SarahConnor.mp3"
    },
    {
        "id": 12,
        "title": "Still Loving You",
        "releaseDate": "2020-1-23",
        "artist": "Scorpions",
        "url": "StillLovingYou-Scorpions.mp3"
    },
];
let idcounter = 13;

module.exports = class Song {

    constructor(id, title, releaseDate, artist, url) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.artist = artist;
        this.url = url
    }

    save() {
        this.id = idcounter++;
        songs.push(this);
        return this;
    }

    static getAll() {
        return songs;
    }

    //get single song
    static getSongById(id) {
        const result = songs.find(s => s.id === parseInt(id));
        if (result) {
            return result;
        } else {
            throw new Error(`Couldn't find song with id: ${parseInt(id)}`);
        }
    }


    delete() {
        const index = songs.findIndex(s => s.id == this.id);
        if (index > -1) {
            songs.splice(index, 1);
        } else {
            throw new Error(`Couldn't find song with id: ${id}`);
        }
    }

    update() {
        const index = songs.findIndex(s => s.id == this.id);
        if (index > -1) {
            //new Song(req.params.id, req.body.title, req.body.price, req.body.description).update();
            // songs[index] = this;
            const s = songs[index];
            if (this.title) {
                s.title = this.title;
            }
            if (this.artist) {
                s.artist = this.artist;
            }
            if (this.releaseDate) {
                s.releaseDate = this.releaseDate;
            }
        } else {
            throw new Error(`Couldn't find song with id: ${id}`);
        }
    }
}

module.exports.musicDB = {songs}