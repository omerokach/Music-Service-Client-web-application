import React from "react";
import { Card } from "react-bootstrap";
import data from "../musiceStorage/musicLab.json";
import MyNavbar from "./MyNavbar";

function Song(props) {
  let songsArray = [];
  data.forEach((artist) => {
    return artist.albumArray.forEach((album) => {
      songsArray.push(...album.songs);
    });
  });
  const song = songsArray.filter(
    (song) => song.id === props.match.params.id
  )[0];

  return (
    <>
    <MyNavbar />
    <div className="song-component">
      {console.log(song)}
      <div>
      <Card border="light" style={{ width: "18rem", height: "20rem" }}>
        <Card.Header style={{ color: "black" }}>Song Details:</Card.Header>
        <Card.Body>
          <Card.Title>{song.songName}</Card.Title>
          <Card.Text>
            {console.log(song)}
            <p>Num of comments: {song.statistics.commentCount}</p>
            <p>Num of comments: {song.statistics.commentCount}</p>
            <p>Num of dislikeCount: {song.statistics.dislikeCount}</p>
            <p>Num od likes: {song.statistics.likeCount}</p>
            <p>Number of views: {song.statistics.viewCount}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <iframe
        width="420"
        height="315"
        title='iframe'
        src={`https://www.youtube.com/embed/${song.id}`}
      ></iframe>
    </div>
    </>
  );
}

export default Song;
