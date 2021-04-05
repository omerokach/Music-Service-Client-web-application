const KEY = `AIzaSyAGUbrmXBrjwhsb3KoaT3I46GwU2P2jkNc`;
const axios = require("axios");
const YoutubeMusicApi = require("youtube-music-api");
const api = new YoutubeMusicApi();
const fs = require("fs");

const artistArray = [
  "eminem",
  "cold play",
  "beatles",
  "drake",
  "akon",
  "nickleback",
    "nirvana",
    "oasis",
    "linkin park",
    // "Tuna",
    "Omer Adam",
    // "Nechi Nech",
    // "dua lipa",
    "rihanna",
];

const getArtist = async (artistName) => {
  return api.initalize().then(async () => {
    return await api.search(artistName, "artist").then(async (response) => {
      const artistId = response.content[0].browseId;
      const artist = await api.getArtist(artistId).then(async (res) => {
        const { content } = res.products.albums;
        const promiseArray = content.map(async (album) => {
          return await getAlbum(album.name);
        });
        const albumArray = await Promise.all(promiseArray);
        // console.log(res);
        const artistName = res.name;
        const { views } = res;
        const thumbnail = res.thumbnails[2];
        const obj = {
          artistName: artistName,
          views: views,
          thumbnail: thumbnail,
          albumArray: albumArray,
        };
        return obj;
      });
      return artist;
    });
  });
};

const getAlbum = async (albumName) => {
  return api.initalize().then(async () => {
    const details = await api.search(albumName, "album");
    const album = details.content[0];
    const albumDetails = await api.getAlbum(album.browseId);

    //Album details
    const { title } = albumDetails;
    const { description } = albumDetails;
    const { trackCount } = albumDetails;
    const { date } = albumDetails;

    //Album thumbnail
    const thumbnail = album.thumbnails[3].url;

    //Songs Album
    const { tracks } = albumDetails;
    const promiseArray = tracks.map(async (track) => {
      return await getSongDetails(track.videoId);
    });
    const songs = await Promise.all(promiseArray);
    const obj = {
      thumbnail: thumbnail,
      title: title,
      description: description,
      trackCount: trackCount,
      date: date,
      songs: songs,
    };
    // console.log(obj);
    return obj;
  });
};

const getSongDetails = async (videoId) => {
  const URL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}
     &fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
  const data = await axios.get(URL);
  return data.data.items[0];
};

(async () => {
  const promiseArray = artistArray.map(async (artist) => {
    const obj = await getArtist(artist);
    return obj;
  });
  const artists = await Promise.all(promiseArray);
  console.log(artists);
  fs.writeFileSync("musicLab3.json", JSON.stringify(artists))
  //   console.log(JSON.stringify(obj));
})();
