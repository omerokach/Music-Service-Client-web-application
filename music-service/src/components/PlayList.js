import React from "react";
import disc from "../style/disc.png";
function PlayList(props) {
  const playList = props.location.aboutProps.playList;
  console.log("props playlist", playList);
  return <div>
      <img src={disc} alt='disc-img'></img>
    </div>;
}

export default PlayList;
