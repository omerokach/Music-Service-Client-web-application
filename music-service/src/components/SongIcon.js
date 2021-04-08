import React from "react";
import { Link } from "react-router-dom";

function SongIcon(props) {
  const wrapString = (str) => {
    let newStr = '';
    for(let i =0; i< 25; i++){
      newStr += str[i];
    }
    return newStr+'...'
  }
  return (
    <div>
      <Link to={{ pathname: `/song/${props.song.id}`, aboutProps: props.song }}>
        <p>{wrapString(props.song.songName)}</p>
        <img
          src={props.song.img}
          style={{ width: "15rem", height: "10rem" }}
          alt="song img"
        ></img>
      </Link>
    </div>
  );
}

export default SongIcon;
