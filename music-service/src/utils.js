
const funcs = {
    //retrive top 5 songs by views
    findTopFiveSongs: function (data){
      const topFiveSongs = [];
      const topFiveViews = [];
      const allSongsViews = [];
      const allSongs = [];
      data.map((artist) => {
        artist.albumArray.map((album) => {
          album.songs.map((song) => {
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
      allSongs.map((song) => {
        for (let i = 0; i < 5; i++) {
          if (song.statistics.viewCount === topFiveViews[i]) {
            topFiveSongs.push(song);
          }
        }
      });
      return topFiveSongs;
    },
    
    //retrive top 5 artists by views
    findTopFiveArtists: function (data) {
      const topFiveArtists = [];
      const topFiveViews = [];
      const allArtistsViews = [];
      const allArtists = [];
      data.map((artist) => {
        allArtists.push(artist);
        allArtistsViews.push(artist.views);
      });
      //sorting all artist views
      allArtistsViews.sort((a, b) => a - b);
      for (let i = 0; i < 5; i++) {
        topFiveViews.push(allArtistsViews.pop());
      }
      //taking only the first 5
      allArtists.map((artist) => {
        for (let i = 0; i < 5; i++) {
          if (artist.views === topFiveViews[i]) {
            topFiveArtists.push(artist);
          }
        }
      });
      return topFiveArtists;
    },
    
    //retrive top 5 albums by views
    findTopFiveAlbums: function (data) {
      const topFiveAlbums = [];
      const topFiveViews = [];
      const allAAlbumsViews = [];
      const allAlbums = [];
      data.map((artist) => {
        allAlbums.push(...artist.albumArray);
        console.log(allAlbums);
        // allAAlbumsViews.push(artist.views);
      });
      //sorting all artist views
      allAAlbumsViews.sort((a, b) => a - b);
      for (let i = 0; i < 5; i++) {
        topFiveViews.push(allAAlbumsViews.pop());
      }
      //taking only the first 5
      allAlbums.map((artist) => {
        for (let i = 0; i < 5; i++) {
          if (artist.views === topFiveViews[i]) {
            topFiveAlbums.push(artist);
          }
        }
      });
      return topFiveAlbums;
    }
}

export default funcs;
