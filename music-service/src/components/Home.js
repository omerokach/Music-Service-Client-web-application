import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {
  findTopFiveSongs,
  findTopFiveArtists,
  findTopFiveAlbums,
  findTopFivePlayList,
} from "../utils";
import PlayList from "./PlayList";
import Song from "./Song";
import Artist from "./Artist";
import Album from "./Album";
import { Route } from "react-router";

const topFiveArtists = findTopFiveArtists();
const topFiveSongs = findTopFiveSongs();
const topFiveAlbums = findTopFiveAlbums();
const topfivePlayList = findTopFivePlayList();
function Home(props) {
  console.log(topFiveArtists);
  console.log(topFiveSongs);
  console.log(topFiveAlbums);
  console.log(topfivePlayList);

  return (
    <div>
      <div id="top-artist">
        <Link to=""></Link>
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
      <BrowserRouter>
        <Route exact path="/playlist/:id" component={PlayList} />
        <Route exact path="/artist/:id" component={Artist} />
        <Route exact path="/album/:id" component={Album} />
        <Route exact path="/song/:id/" component={Song} />
      </BrowserRouter>
    </div>
  );
}

export default Home;
