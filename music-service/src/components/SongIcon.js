import React from "react";
import { Link } from "react-router-dom";

function SongIcon(props) {
  return (
    <Link to={{ pathname: `/song/${props.song.id}`, aboutProps: props.song }}>
      <img
        src={props.song.img}
        style={{ width: "15rem", height: "10rem" }}
        alt='song img'
      ></img>
    </Link>
  );
}

export default SongIcon;
