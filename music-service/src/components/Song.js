import React from "react";

function Song(props) {
  const song = props.location.aboutProps;
  return (
    <div>
      <img src={song.img} alt='song img'></img>
    </div>
  );
}

export default Song;
