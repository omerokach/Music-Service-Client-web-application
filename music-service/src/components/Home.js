import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
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
      <div id="top-artist">
        <Link></Link>
      </div>
      <div id="top-albums">
        <Link></Link>
      </div>
      <div id="top-songs">
        <Link></Link>
      </div>
      <div id="top-playlist">
        <Link></Link>
      </div>
    </div>
  );
}

export default Home;
