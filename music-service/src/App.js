import "./App.css";
import Home from "./components/Home";
import PlayList from "./components/PlayList";
import Song from "./components/Song";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import {
  findTopFiveSongs,
  findTopFiveArtists,
  findTopFiveAlbums,
  findTopFivePlayList,
} from "./utils";
const topFiveArtists = findTopFiveArtists();
const topFiveSongs = findTopFiveSongs();
const topFiveAlbums = findTopFiveAlbums();
const topfivePlayList = findTopFivePlayList();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlist/:id" component={PlayList} />
        <Route exact path="/artist/:id" component={Artist} />
        <Route exact path="/album/:id" component={Album} />
        <Route exact path="/song/:id/" component={Song} />
      </BrowserRouter>
    </div>
  );
}

export default App;
