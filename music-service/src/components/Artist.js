import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import data from "../musiceStorage/musicLab.json";
import MyNavbar from "./MyNavbar";

function Artist(props) {
  const artist = data.filter((artist) => {
    return artist.id === props.match.params.id;
  })[0];
  const { albumArray } = artist;
  return (
    <>
      <MyNavbar />
      <div className="artist-component">
        <div>
          <Card border="light" style={{ width: "18rem", height: "20rem" }}>
            <Card.Header style={{ color: "black" }}>
              Artist Details:
            </Card.Header>
            <Card.Body>
              <Card.Title>{artist.artistName}</Card.Title>
              <Card.Text>
                {console.log(artist)}
                <p>Number of albums: {albumArray.length}</p>
                <p>Total views: {artist.views}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <img
          id="artist-img-component"
          src={artist.thumbnail.url}
          alt="artist img"
        ></img>
      </div>
      <div className="acordion-container">
        <h3>Albums</h3>
        <Accordion>
          {console.log(Accordion)}
          {albumArray.map((album, i) => {
            return (
              <Card>
                <Accordion.Toggle
                  style={{ color: "black" }}
                  as={Card.Header}
                  eventKey={`${i}`}
                >
                  {album.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={`${i}`}>
                  <Card.Body>
                    {album.songs.map((song) => (
                      <Link
                        style={{'text-decoration': 'none'}}to={{ pathname: `/song/${song.id}`, aboutProps: { song } }}
                      >
                        <p>{song.songName}</p>
                      </Link>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}

export default Artist;
