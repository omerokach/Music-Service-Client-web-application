import React from "react";
import { Link } from "react-router-dom";

function ArtistIcon(props) {
  return (
    <div>
      <p>{props.artist.artistName}</p>
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
    </div>
  );
}

export default ArtistIcon;
