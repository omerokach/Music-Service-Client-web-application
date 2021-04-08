import data from "./musiceStorage/musicLab.json";
//retrive top 5 songs by views
export function findTopFiveSongs() {
  const topFiveSongs = [];
  const topFiveViews = [];
  const allSongsViews = [];
  const allSongs = [];
  data.forEach((artist) => {
    artist.albumArray.forEach((album) => {
      album.songs.forEach((song) => {
        allSongs.push(song);
        allSongsViews.push(song.statistics.viewCount);
      });
    });
  });
  //sorting all songs views
  allSongsViews.sort((a, b) => a - b);
  for (let i = 0; i < 5; i++) {
    topFiveViews.push(allSongsViews.pop());
  }
  //taking only the first 5
  allSongs.forEach((song) => {
    for (let i = 0; i < 5; i++) {
      if (song.statistics.viewCount === topFiveViews[i]) {
        topFiveSongs.push(song);
      }
    }
  });
  return topFiveSongs;
}

//retrive top 5 artists by views
export function findTopFiveArtists() {
  const topFiveArtists = [];
  const topFiveViews = [];
  const allArtistsViews = [];
  const allArtists = [];
  data.forEach((artist) => {
    allArtists.push(artist);
    allArtistsViews.push(artist.views);
  });
  //sorting all artist views
  allArtistsViews.sort((a, b) => a - b);
  for (let i = 0; i < 5; i++) {
    topFiveViews.push(allArtistsViews.pop());
  }
  //taking only the first 5
  allArtists.forEach((artist) => {
    for (let i = 0; i < 5; i++) {
      if (artist.views === topFiveViews[i]) {
        topFiveArtists.push(artist);
      }
    }
  });
  return topFiveArtists;
}

//retrive top 5 albums by views
export function findTopFiveAlbums() {
  const topFiveAlbums = [];
  const topFiveViews = [];
  const allAlbumsViews = [];
  const allAlbums = [];
  let sumViews = 0;
  data.forEach((artist) => {
    artist.albumArray.forEach((album) => {
      album.songs.forEach((song) => {
        sumViews += Number(song.statistics.viewCount);
      });
      allAlbumsViews.push(sumViews);
      allAlbums.push({ album: album, sumViews: sumViews });
    });
  });
  //sorting all artist views
  allAlbumsViews.sort((a, b) => a - b);
  for (let i = 0; i < 5; i++) {
    topFiveViews.push(allAlbumsViews.pop());
  }
  //taking only the first 5
  allAlbums.forEach((album) => {
    for (let i = 0; i < 5; i++) {
      if (album.sumViews === topFiveViews[i]) {
        topFiveAlbums.push(album);
      }
    }
  });
  return topFiveAlbums;
}

//retrive top 5 playlist by views
export function findTopFivePlayList() {
  const topViews = [];
  const allSongsViews = [];
  const allSongs = [];
  data.forEach((artist) => {
    artist.albumArray.forEach((album) => {
      album.songs.forEach((song) => {
        allSongs.push(song);
        allSongsViews.push(song.statistics.viewCount);
      });
    });
  });
  //sorting all songs views
  allSongsViews.sort((a, b) => a - b);
  for (let i = 0; i < 125; i++) {
    topViews.push(allSongsViews.pop());
  }
  let topFivePlayList = [];
  let playList = [];
  //taking only the first 5
  let playListId = 0;
  const playListName = [
    "Most viewed",
    "Made just for you",
    "Clasic",
    "Nostalgic",
    "Mixed",
  ];
  allSongs.forEach((song) => {
    for (let i = 0; i < 125; i++) {
      if (song.statistics.viewCount === topViews[i]) {
        playList.push(song);
        if (playList.length === 25) {
          topFivePlayList.push({
            id: playListId,
            playListName: playListName[playListId],
            songs: playList,
          });
          playListId += 1;
          playList = [];
        }
      }
      if (topFivePlayList.length === 5) break;
    }
  });
  return topFivePlayList;
}
