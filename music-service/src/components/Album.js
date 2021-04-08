import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import data from "../musiceStorage/musicLab.json";
import MyNavbar from "./MyNavbar";

function Album(props) {
//   const album = props.location.aboutProps.album;
    const albumArray = [];
    data.forEach(artist => {
        albumArray.push(...artist.albumArray);
    });
  const album = albumArray.filter((album) => {
    return album.id === props.match.params.id;
  })[0];

  return (

      <>
      <MyNavbar />
      <div className="artist-component">
        <img id="artist-img-component" src={album.thumbnail} alt="album img"></img>
        <div>
          <Card border="light" style={{ width: "18rem", height: "20rem" }}>
            <Card.Header style={{ color: "black" }}>
              Album Details:
            </Card.Header>
            <Card.Body>
              <Card.Title>{album.artistName}</Card.Title>
              <Card.Text>
                {/* {console.log(artist)} */}
                <p>Artist Name: {album.artistName}</p>
                <p>Date of album: `{album.date.day}/{album.date.month}/{album.date.year}`{albumArray.length}</p>
                <p>Number of tracks: {album.tracksCount}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="acordion-container">
        <h3>Songs</h3>
        <ul>
          {album.songs.map((song, i) => {
           return <li><Link to={{ pathname: `/song/${song.id}`, aboutProps: { song } }}>{song.songName}</Link></li>   
        })}
        </ul>
          {console.log(Accordion)}
              
      </div>
    </>
  );
}

export default Album;
