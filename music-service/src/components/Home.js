import React, { useState } from "react";
import data from "../musiceStorage/musicLab.json";
import {
  findTopFiveSongs,
  findTopFiveArtists,
  findTopFiveAlbums,
  findTopFivePlayList,
} from "../utils";

const topFiveArtists = findTopFiveArtists();
const topFiveSongs = findTopFiveSongs();
const topFiveAlbums = findTopFiveAlbums();
const topfivePlayList = findTopFivePlayList();
function Home(props) {
  console.log(topFiveArtists);
  console.log(topFiveSongs);
  console.log(topFiveAlbums);
  console.log(topfivePlayList);
  const [musicLibray, setMusicLibrary] = useState(data);
  return (
    <div>
      <div id="top-artist"></div>
      <div id="top-albums"></div>
      <div id="top-songs"></div>
      <div id="top-playlist"></div>
    </div>
  );
}

export default Home;
