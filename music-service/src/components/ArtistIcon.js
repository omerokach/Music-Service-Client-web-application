import React from "react";
import { Link } from "react-router-dom";

function ArtistIcon(props) {
  return (
    <Link
      to={{
        pathname: `/artist/${props.artist.id}`,
        aboutProps: { artist: props.artist },
      }}
    >
      <img
        src={props.artist.thumbnail.url}
        style={{ width: "15rem", height: "10rem" }}
        alt="artist img"
      ></img>
    </Link>
  );
}

export default ArtistIcon;
