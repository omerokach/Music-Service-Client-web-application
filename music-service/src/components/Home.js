import React from "react";
import {
  findTopFiveSongs,
  findTopFiveArtists,
  findTopFiveAlbums,
  findTopFivePlayList,
} from "../utils";
import PlayListIcon from "./PlayListIcon";
import SongIcon from "./SongIcon";
import AlbumIcon from "./AlbumIcon";
import ArtistIcon from "./ArtistIcon";
import MyNavbar from "./MyNavbar.js";

const topFiveArtists = findTopFiveArtists();
const topFiveSongs = findTopFiveSongs();
const topFiveAlbums = findTopFiveAlbums();
const topfivePlayList = findTopFivePlayList();
function Home(props) {
  return (
    <div>
      <MyNavbar />
      <header id="home-header">
        <h1>Well come to the music service</h1>
      </header>
      <h3 className="home-list-title">Top 5 Artists</h3>
      <div class="home-list" id="top-artist">
        {topFiveArtists.map((artist, i) => (
          <ArtistIcon artist={artist} key={i} />
        ))}
      </div>
      <h3 className="home-list-title">Top 5 albums</h3>
      <div class="home-list" id="top-albums">
        {topFiveAlbums.map((album, i) => (
          <AlbumIcon album={album} key={i} />
        ))}
      </div>
      <h3 className="home-list-title">Top 5 songs</h3>
      <div class="home-list" id="top-songs">
        {topFiveSongs.map((song, i) => (
          <SongIcon song={song} key={i} />
        ))}
      </div>
      <h3 className="home-list-title">Top 5 playlist</h3>
      <div class="home-list" id="top-playlist">
        {topfivePlayList.map((PlayList, i) => (
          <PlayListIcon playList={PlayList} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
