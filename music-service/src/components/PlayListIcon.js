import React from "react";
import disc from "../style/disc.png";
import { Link } from "react-router-dom";

function PlayListIcon(props) {
  console.log(props.playList);
  return (
    <div>
      <p>{props.playList.playListName}</p>
    <Link to={{pathname:`/playlist/${props.playList.id}`, aboutProps:{playList: props.playList}}}>
      <img
        src={disc}
        alt="disc img"
        style={{ width: "15rem", height: "10rem" }}
      ></img>
    </Link>
    </div>
  );
}

export default PlayListIcon;
