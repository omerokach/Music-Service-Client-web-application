import React from "react";

function Song(props) {
  const song = props.location.aboutProps;
  return (
    <div>
      {console.log(song.song)}
      <img src={song.song.img} alt="song img"></img>
    </div>
  );
}

export default Song;
